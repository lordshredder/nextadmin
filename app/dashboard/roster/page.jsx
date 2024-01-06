import styles from "@/app/ui/dashboard/roster/roster.module.css";
import Rosterunit from "@/app/ui/dashboard/rosterunit/rosterunit";
import { fetchUnits, fetchMember } from "@/app/lib/data";
import { updateMemberRoster } from "@/app/lib/actions";
import { auth } from "@/app/lib/auth";
import Search from "@/app/ui/dashboard/search/search";

const Roster = async ({searchParams}) => {

  const session = await auth();
  const { user } = await auth();
  const q = searchParams?.q || "";
  const data = await fetchUnits(q);
  console.log(session);
  console.log(user);
  const member = await fetchMember(user.id);


  let selectedIds = searchParams?.selectedIds || "";
  const id = member.id || "";
  if((selectedIds === "" || null) && member.rosterstring !== "") {
    selectedIds = member.rosterstring;
  }
  return (
    <div>
        <div className={styles.top}>
          <Search placeholder="Search a unit..."/>
          <form action={updateMemberRoster} className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="rosterstring" value={selectedIds} />
          <button className={`${styles.button} ${styles.submit}`}>
            Submit
          </button>
        </form>
        </div>

      <Rosterunit data={data} id={id} existingIds={selectedIds}/>
    </div>
  );
}
export default Roster