"use client"
import styles from "@/components/ui/dashboard/admin/members/singleMember/singleMember.module.css";
import Image from "next/image";
import { selfUpdateMember } from "@/lib/actions";
import { useFormState } from "react-dom";
import { toast } from 'sonner';
import { useEffect } from "react";

const SettingsForm = ({currentUser, member}) => {
    const id = currentUser.id;
    const [state, formAction] = useFormState(selfUpdateMember, {
        message: "",
        errors: undefined,
    });
    useEffect(() => {
        if(state.message === "success"){
          toast.success('Updated user.')
        } else if(state.message === "error") {
          toast.error(state.errors)
        }
      })
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
                    <label>Loginname</label>
                    <input type="text" name="username" defaultValue={currentUser.username} />
                    </div>
                    <div className={styles.childrengroup}>
                    <label>Password</label>
                    <input type="password" name="password" />
                    </div>
                </div>
                <label>Status</label>
                <select name="status" id="status" defaultValue={member.status}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="vacation">Vacation</option>
                </select>
                <button>Update</button>
                </form>
            </div>
            </div>
      </>
    );
  };

export default SettingsForm;