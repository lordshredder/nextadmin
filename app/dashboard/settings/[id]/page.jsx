//import styles from "@/components/ui/dashboard/admin/members/singleMember/singleMember.module.css";
import Image from "next/image";
import {fetchAllMembers, fetchMember, fetchUser } from "@/lib/data";
import { auth } from "@/lib/auth";
import SettingsForm from "@/components/ui/dashboard/settingsform/settingsform";

export const revalidate = 600;

export async function generateStaticParams(){
  const member = await fetchAllMembers(true);
  const ids = member.map((memb)=>(memb.id))
  return ids.map((id)=> {
    return {
      id,
    }
  })
}

const MemberSettings = async () => {
  const { user } = await auth();
  const id = user.id;
  const member = await fetchMember(id, true);
  member._id = "";
  const currentUser = await fetchUser(id, true);
  currentUser._id = "";
  return (
    <>
    <SettingsForm currentUser={currentUser} member={member}/>
    </>
  );
};

export default MemberSettings;