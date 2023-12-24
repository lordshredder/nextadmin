import styles from "@/app/ui/dashboard/members/singleMember/singleMember.module.css";
import Image from "next/image";
import { fetchMember } from "@/app/lib/data";
import { updateMember } from "@/app/lib/actions";

const SingleMemberPage = async ({ params }) => {
  const { id } = params;
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
          <label>Membername</label>
          <input type="text" name="member" placeholder={member.member} />
          <label>Level</label>
          <input type="number" name="level" placeholder={member.level} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Roster</label>
          <input type="text" name="urlroster" placeholder={member.urlroster} />
          <label>CB Syncs</label>
          <input type="number" name="sync" placeholder={member.sync} />
          <label>CB Boss Kills</label>
          <input type="number" name="killer" placeholder={member.killer} />
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

export default SingleMemberPage;