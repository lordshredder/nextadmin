"use client";
import styles from "./rosterunit.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Rosterunit = ({ data }) => {

    const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const selectedIds = new URLSearchParams(searchParams).get('selectedIds') ? new URLSearchParams(searchParams).get('selectedIds').split(',').map(id => parseInt(id)) : [];


  const handleClick = (id) => {
    const params = new URLSearchParams(searchParams);
    let newIds = [...selectedIds];
    if (newIds.includes(id)) {
      newIds = newIds.filter(selectedId => selectedId !== id);
      
    } else {
      newIds.push(id);
    }
    params.set('selectedIds', newIds.join(','));


    replace(`${pathname}?${params}`, { scroll: false });
  };



  return (
    <div>
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.imageid} className={styles.rosterItem}>
            <img
              src={item.imagelink}
              alt={item.name}
              title={item.name}
              className={selectedIds.includes(parseInt(item.imageid)) ? styles.selectedImg : styles.normalImg}
              onClick={() => handleClick(parseInt(item.imageid))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rosterunit;