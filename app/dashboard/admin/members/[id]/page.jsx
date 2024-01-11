import styles from "@/components/ui/dashboard/admin/members/singleMember/singleMember.module.css";
import { fetchMember, fetchUser } from "@/lib/data";
import MemberForm from "./memberForm";

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