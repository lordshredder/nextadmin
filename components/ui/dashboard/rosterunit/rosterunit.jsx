"use client";
import Image from "next/image";
import styles from "./rosterunit.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateMemberRoster } from "@/lib/actions";
import Search from "@/components/ui/dashboard/search/search";
import { useFormState } from "react-dom";
import { toast } from 'sonner';
import { useEffect } from "react";
const Rosterunit = ({ data, id, existingIds }) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const selectedIds = new URLSearchParams(searchParams).get('selectedIds') ? new URLSearchParams(searchParams).get('selectedIds').split(',').map(id => parseInt(id)) : [];
  const params = new URLSearchParams(searchParams);
  if(!params.get('id')){
  params.set('id', id);
  if(existingIds) params.set('selectedIds', existingIds.split(',').map(id => parseInt(id)));
  replace(`${pathname}?${params}`, { scroll: false });}

  const handleClick = (item) => {
    const itemid = parseInt(item.id);
    const params = new URLSearchParams(searchParams);
    let newIds = [...selectedIds];
    if (newIds.includes(itemid)) {
      newIds = newIds.filter(selectedId => selectedId !== itemid);   
    } else {
      newIds.push(itemid);
    }
    params.set('selectedIds', newIds.join(','));


    replace(`${pathname}?${params}`, { scroll: false });
  };

  const [state, formAction] = useFormState(updateMemberRoster, {
    message: "",
    errors: undefined,
  });

useEffect(() => {
  if(state.message === "success"){
    toast.success('Updated roster.')
  } else if(state.message === "error") {
    toast.error(state.errors)
  }
});



  return (
    <>
    <div className={styles.top}>
          <Search placeholder="Search a unit..."/>
          <form action={formAction} className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="rosterstring" value={selectedIds} />
          <button className={`${styles.button} ${styles.submit}`}>
            Submit
          </button>
        </form>
        </div>
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.id} className={styles.rosterItem}>
            <Image width={128} height={128}
              src={item.imagelink}
              alt={item.name}
              title={item.name}
              className={selectedIds.includes(parseInt(item.id)) ? styles.selectedImg : styles.normalImg}
              onClick={() => handleClick(item)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Rosterunit;