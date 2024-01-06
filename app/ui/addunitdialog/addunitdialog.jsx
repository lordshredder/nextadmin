"use client";

import styles from "./addunitdialog.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {useRef, useEffect} from 'react';
import { addUnit } from "@/app/lib/actions";


const AddUnitDialog = ({ title, onClose, onOk, children}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get('showDialog');
  const params = new URLSearchParams(searchParams);

  useEffect(()=>{
    if(showDialog==="y"){
      dialogRef.current?.showModal();
    } else{
      dialogRef.current?.close();
    }
  }, [showDialog])

  const closeDialog = () => {
    params.set('showDialog', 'n');
    replace(`${pathname}?${params}`, { scroll: false });
    onClose();
  }

  const clickOk = () => {
    onOk();
    closeDialog();
  }


  const dialog = (
  <dialog className={styles.dialog} ref={dialogRef}>
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.closeButton} onClick={closeDialog}>X
        </button>
      </div>
      <div className={styles.formContainer}>
        <form action={addUnit} className={styles.form}>
          <input type="hidden" name="id" value=""/>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
              <label>Unitname</label>
              <input type="text" name="name" placeholder="Pecorine" />
            </div>
            <div className={styles.childrengroup}>
              <label>Image Link</label>
              <input type="text" name="imagelink" placeholder="https://..." />
            </div>
          </div>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
            <label>Position</label>
            <input type="number" name="range" placeholder="790" />
            </div>
            <div className={styles.childrengroup}>
            <label>Element</label>
            <select name="element" id="element"  required>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Wind">Wind</option>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            </select>
            </div>
          </div>
          <button onClick={clickOk}>Update</button>
        </form>
      </div>
    </div>
  </dialog>);

 return dialog;
};

export default AddUnitDialog;