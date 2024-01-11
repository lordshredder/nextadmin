import styles from "@/components/ui/dashboard/roster/roster.module.css";
import Rosterunit from "@/components/ui/dashboard/rosterunit/rosterunit";
import { fetchUnits, fetchMember } from "@/lib/data";

import { auth } from "@/lib/auth";


const Roster = async ({searchParams}) => {

  const session = await auth();
  const { user } = await auth();
  const q = searchParams?.q || "";
  const data = await fetchUnits(q);
  const member = await fetchMember(user.id);


  let selectedIds = searchParams?.selectedIds || "";
  const id = member.id || "";
  if((selectedIds === "" || null) && member.rosterstring !== "") {
    selectedIds = member.rosterstring;
  }
  return (
    <div>
      <Rosterunit data={data} id={id} existingIds={selectedIds}/>
    </div>
  );
}
export default Roster