import { deleteMember } from "@/app/lib/actions";
import { fetchMembers, fetchMembersWithStats } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/members/members.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

const Members = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count, stats} = await fetchMembersWithStats(q, page);
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search a member..."/>
          <Link href="members/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Level</td>
              <td>Clan</td>
              <td>Last Score</td>
              <td>Best Score</td>
              <td>Status</td>
              <td>Last Update</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {stats.map(member =>(
            <tr key={member.memberobj.id}>
              <td><div className={styles.user}>
              <Image
                    src={member.memberobj.avatar  || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {member.memberobj.member}
              </div>
              </td>
              <td>
                {member.memberobj.level}
              </td>
              <td>{member.memberobj.clan || "---"}</td>
              <td>{member.stats.damage}</td>
              <td>{member.memberobj.bestscore || 0}</td>
              <td>{member.memberobj.status}</td>
              <td>{member.memberobj.updatedAt.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/admin/members/${member.id}`}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
                </Link>
                <form action="{deleteMember}">
                    <input type="hidden" name="id" value={(member.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count}/>
      </div>
    )
  }
  
  export default Members