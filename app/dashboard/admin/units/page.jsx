import styles from "@/app/ui/dashboard/admin/units/units.module.css";
import AdminUnit from "@/app/ui/dashboard/admin/units/adminunit/adminunit";
import AddUnit from "@/app/ui/dashboard/admin/units/addunit/addunit";
import { fetchUnits } from "@/app/lib/data";
import { updateMemberRoster } from "@/app/lib/actions";
import Link from "next/link";
import AddUnitDialog from "@/app/ui/addunitdialog/addunitdialog";
import EditUnitDialog from "@/app/ui/editunitdialog/editunitdialog";
import { confirmDialog , closeDialog} from "@/app/lib/actions";
import { auth } from "@/app/lib/auth";
import Search from "@/app/ui/dashboard/search/search";

const Units = async ({searchParams}) => {
  const session = await auth();
  const { user } = await auth();
  const q = searchParams?.q || "";
  const data = await fetchUnits(q);

  const selectedIds = searchParams?.selectedIds || "";
  const id = searchParams?.id || "";
  return (

    <div className={styles.container}>
        <div className={styles.top}>
        <Search placeholder="Search a unit..."/>
        <AddUnit />


      </div>
      <AddUnitDialog title= "Add Unit" onClose={closeDialog} onOk={confirmDialog}></AddUnitDialog>
      <EditUnitDialog title= "Edit Unit" onClose={closeDialog} onOk={confirmDialog}></EditUnitDialog>
      <AdminUnit data={data}/>
    </div>
  );
}
export default Units