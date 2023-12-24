import styles from "@/app/ui/dashboard/roster/roster.module.css";
import Rosterunit from "@/app/ui/dashboard/rosterunit/rosterunit";
import { fetchUnits } from "@/app/lib/data";
import { updateMemberRoster } from "@/app/lib/actions";
// let data = [
//   {
//     imageLink: "https://redive.estertion.win/icon/unit/105261.webp",
//     id: "1",
//     name: "Rima"
//   },
//   {
//     imageLink: "https://redive.estertion.win/icon/unit/100761.webp",
//     id: "2",
//     name: "Miyako"
//   },
//   // ... More data ...
// ];
const Roster = async ({searchParams}) => {
  const data = await fetchUnits();

  const selectedIds = searchParams?.selectedIds || "";
  const id = searchParams?.id || "";
  return (
    <div>
      <form action={updateMemberRoster}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="rosterstring" value={selectedIds} />
          <button className={`${styles.button} ${styles.submit}`}>
            Submit
          </button>
        </form>
      <Rosterunit data={data}/>
    </div>
  );
}
export default Roster