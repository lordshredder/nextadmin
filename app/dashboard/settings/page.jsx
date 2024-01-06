import styles from "@/app/ui/dashboard/members/singleMember/singleMember.module.css";
import Image from "next/image";
import { fetchMember } from "@/app/lib/data";
import { updateMember } from "@/app/lib/actions";
import { auth } from "@/app/lib/auth";

const Settings = async () => {
  const { user } = await auth();
  const id = user.id;
  const member = await fetchMember(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}> 
          <Image src={member.avatar || "/noavatar.png"} alt="" fill />
        </div>
        {member.member}
      </div>
      <div className={styles.formContainer}>
        <form action={updateMember} className={styles.form}>
          <input type="hidden" name="id" value={member.id}/>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
              <label>Membername</label>
              <input type="text" name="member" placeholder={member.member} />
            </div>
            <div className={styles.childrengroup}>
              <label>Level</label>
              <input type="number" name="level" placeholder={member.level} />
            </div>
          </div>
          <div className={styles.inputgroup}>
            <div className={styles.childrengroup}>
            <label>Loginname</label>
            <input type="text" name="username" placeholder={user.username} />
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
  );
};

export default Settings;