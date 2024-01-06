"use client"
import React from 'react'
import styles from "./addunit.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const AddUnit = () => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  

  const handleChangePage = () => {
     params.set("showDialog", "y")

     replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <div>
      <button className={styles.addButton} onClick={handleChangePage}>
        Add New Unit
      </button>
    </div>
  );
}

export default AddUnit