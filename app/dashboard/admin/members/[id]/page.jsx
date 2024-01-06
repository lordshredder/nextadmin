import styles from "@/app/ui/dashboard/members/singleMember/singleMember.module.css";
import Image from "next/image";
import { fetchMember, fetchUser } from "@/app/lib/data";
import { updateMember } from "@/app/lib/actions";

const SingleMemberPage = async ({ params }) => {
  const { id } = params;

  const member = await fetchMember(id);
  const user = fetchUser(id);
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
          <label>Clan</label>
          <input type="text" name="clan" placeholder={member?.clan || "Pecoriinu"} />
          <label>Level</label>
          <input type="number" name="level" placeholder={member.level} />
          <label>Loginname</label>
          <input type="text" name="username" placeholder={user?.username || "no user found."} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Notes</label>
          <textarea type="text" name="notes" placeholder={member?.notes || ""} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user?.isAdmin || false}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          </select>
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