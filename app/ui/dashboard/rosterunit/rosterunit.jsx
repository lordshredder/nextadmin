"use client";
import Image from "next/image";
import styles from "./rosterunit.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Rosterunit = ({ data, id, existingIds }) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const selectedIds = new URLSearchParams(searchParams).get('selectedIds') ? new URLSearchParams(searchParams).get('selectedIds').split(',').map(id => parseInt(id)) : [];
  const params = new URLSearchParams(searchParams);
  if(!params.get('id')){
  params.set('id', id);
  console.log("reloaded");
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



  return (
    <div>
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.id} className={styles.rosterItem}>
            <Image
              src={item.imagelink}
              alt={item.name}
              title={item.name}
              className={selectedIds.includes(parseInt(item.id)) ? styles.selectedImg : styles.normalImg}
              onClick={() => handleClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rosterunit;