import styles from "@/components/ui/dashboard/admin/units/units.module.css";
import AdminUnit from "@/components/ui/dashboard/admin/units/adminunit/adminunit";
import AddUnit from "@/components/ui/dashboard/admin/units/addunit/addunit";
import { fetchUnits } from "@/lib/data";
import { updateMemberRoster } from "@/lib/actions";
import Link from "next/link";
import AddUnitDialog from "@/components/ui/dashboard/admin/units/addunitdialog/addunitdialog";
import EditUnitDialog from "@/components/ui/dashboard/admin/units/editunitdialog/editunitdialog";
import { confirmDialog , closeDialog} from "@/lib/actions";
import { auth } from "@/lib/auth";
import Search from "@/components/ui/dashboard/search/search";

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