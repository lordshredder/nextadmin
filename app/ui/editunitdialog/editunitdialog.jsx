"use client";

import styles from "./editunitdialog.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {useRef, useEffect} from 'react';
import { editUnit } from "@/app/lib/actions";


const EditUnitDialog = ({ title, onClose, onOk}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get('showEditDialog');
  const params = new URLSearchParams(searchParams);
  let unitdata = {};
  unitdata['id'] = searchParams.get('slI');
  unitdata['imagelink'] = searchParams.get('slIM');
  unitdata['element'] = searchParams.get('slE');
  unitdata['name'] = searchParams.get('slN');
  unitdata['range'] = searchParams.get('slP');
  unitdata['stars'] = searchParams.get('slS');

  useEffect(()=>{
    if(showDialog==="y"){
      dialogRef.current?.showModal();

    } else{
      dialogRef.current?.close();
    }
  }, [showDialog])

  const closeDialog = () => {
    params.set('showEditDialog', 'n');
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
        <form action={editUnit} className={styles.form}>
          <input type="hidden" name="id" defaultValue={unitdata.id}/>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
              <label>Unitname</label>
              <input type="text" name="name" placeholder="Pecorine" defaultValue={unitdata.name} />
            </div>
            <div className={styles.childrengroup}>
              <label>Image Link</label>
              <input type="text" name="imagelink" placeholder="https://..." defaultValue={unitdata.imagelink}/>
            </div>
          </div>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
            <label>Position</label>
            <input type="number" name="range" placeholder="790" defaultValue={unitdata.range}/>
            </div>
            <div className={styles.childrengroup}>
            <label>Element</label>
            <select name="element" id="element" defaultValue={unitdata.element} value={unitdata.element}  required>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Wind">Wind</option>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            </select>
            </div>
          </div>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
            <label>Stars</label>
            <input type="number" name="stars" placeholder="5" value={unitdata.stars}/>
            </div>
          </div>
          <button onClick={clickOk}>Update</button>
        </form>
      </div>
    </div>
  </dialog>);

 return dialog;
};

export default EditUnitDialog;