"use client";
import Image from "next/image";
import styles from "./adminunit.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AdminUnit = ({ data, id }) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const selectedIds = new URLSearchParams(searchParams).get('selectedIds') ? new URLSearchParams(searchParams).get('selectedIds').split(',').map(id => parseInt(id)) : [];
  //const params = new URLSearchParams(searchParams);
  // if(!params.get('id')){
  // params.set('id', id);
  // console.log("reloaded");
  // if(existingIds) params.set('selectedIds', existingIds.split(',').map(id => parseInt(id)));
  // replace(`${pathname}?${params}`, { scroll: false });}

  const handleClick = (item) => {
    
    const params = new URLSearchParams(searchParams);
    let newIds = [...selectedIds];
    if (newIds.includes(id)) {
      newIds = newIds.filter(selectedId => selectedId !== id);
      
    } else {
      newIds.push(id);
    }
    params.set('slI', item.id);
    params.set('slIM', item.imagelink);
    params.set('slN', item.name);
    params.set('slE', item.element);   
    params.set('slP', item.range);
    params.set('slS', item.stars);
    params.set('showEditDialog', 'y');


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

              className={styles.normalImg}
              onClick={() => handleClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUnit;