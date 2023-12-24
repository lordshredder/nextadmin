import { addMember } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/members/addMember/addMember.module.css";

const AddMemberPage = () => {
  return (
    <div className={styles.container}>
      <form action={addMember} className={styles.form}>
        <input type="number" placeholder="id" name="id" required />
        <input type="text" placeholder="membername" name="member" required />
        <input type="number" placeholder="level" defaultValue={1} name="level" />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <select name="status" id="status">
          <option value="active" selected>Active</option>
          <option value="inactive">Inactive</option>
          <option value="vacation">Vacation</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMemberPage;