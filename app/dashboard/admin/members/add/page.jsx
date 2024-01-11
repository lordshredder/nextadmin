import { addUser } from "@/lib/actions";
import styles from "@/components/ui/dashboard/admin/members/addMember/addMember.module.css"

const AdminAddMemberPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="discord number" name="id" required />
        <input type="text" placeholder="username" name="username" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminAddMemberPage;