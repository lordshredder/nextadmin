"use client"
import styles from "@/components/ui/dashboard/admin/members/singleMember/singleMember.module.css";
import Image from "next/image";
import { updateMember } from "@/lib/actions";
import { useFormState } from "react-dom";
import { toast } from 'sonner';
import { useEffect } from "react";

const MemberForm = ({ member, user }) => {
    const [state, formAction] = useFormState(updateMember, {
      message: "",
      errors: undefined,
    });

    useEffect(() => {
      if(state.message === "success"){
        toast.success('Success!')
      } else if(state.message === "error") {
        toast.error(state.errors)
      }
    });


    return (
      <>
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}> 
          <Image src={member.avatar || "/noavatar.png"} alt="" fill />
        </div>
        {member.member}
      </div>
      <div className={styles.formContainer}>
        <form action={formAction} className={styles.form}>
          <input type="hidden" name="id" defaultValue={member.id}/>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
            <label>Membername</label>
            <input type="text" name="member" defaultValue={member.member} />
            </div>
            <div className={styles.childrengroup}>
            <label>Level</label>
            <input type="number" name="level" defaultValue={member.level} />
            </div>
          </div>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
            <label>Clan</label>
            <input type="text" name="clan" defaultValue={member?.clan || "Pecoriinu"} />
            </div>
            <div className={styles.childrengroup}>
              <label>Status</label>
              <select name="status" id="status" defaultValue={member.status}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="vacation">Vacation</option>
              </select>
            </div>
          </div>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
            <label>Loginname</label>
            <input type="text" name="username" defaultValue={user?.username || "no user found."} />
            </div>
            <div className={styles.childrengroup}>
            <label>Password</label>
          <input type="password" name="password" />
            </div>
              <div className={styles.childrengroup}>
              <label>Is Admin?</label>
              <select name="isAdmin" id="isAdmin" defaultValue={user?.isAdmin || false}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
              </select>
              </div>
          </div>
          <label>Notes</label>
          <textarea type="text" name="notes" defaultValue={member?.notes || ""} />
          <button>Update</button>
        </form>
      </div>
    </div>
      </>
    );
  };
  
  export default MemberForm;