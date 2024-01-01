import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/members/addMember/addMember.module.css";

const AddMemberPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="id" name="id" required />
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="img" name="img" />
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

export default AddMemberPage;