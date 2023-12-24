import styles from "@/app/ui/dashboard/hitplan/hitplan.module.css";
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
const SingleMemberHitplan = async ({searchParams, params}) => {
  const { id } = params;
  const data = await fetchUnits();

  const selectedIds = searchParams?.selectedIds || "";
  return (
    <div>
      <form action={updateMemberHitplan}>
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
export default SingleMemberHitplan