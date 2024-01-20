import styles from "@/components/ui/dashboard/admin/members/singleMember/singleMember.module.css";
import {fetchAllMembers, fetchMember, fetchUser } from "@/lib/data";
import MemberForm from "./memberForm";

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

const SingleMemberPage = async ({ params }) => {
  const { id } = params;

  const member = await fetchMember(id, true);
  const user = await fetchUser(id, true);
  member._id = "";
  user._id = "";
  return (
    <div>
    <MemberForm member={member} user={user} />
  </div>
  );
};

export default SingleMemberPage;