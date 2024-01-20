import Image from "next/image";
import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdLogout,
  } from "react-icons/md";

  import { GiDeathZone, GiMeepleGroup, GiBookCover, GiSwordsEmblem  } from "react-icons/gi";
import MenuLink from "./menuLink/menuLink";
import { auth, signOut } from "@/lib/auth";
  
  const menuItems = [
    {
      title: "General",
      list: [
        {
          title: "Overview",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Hitplan",
          path: "/dashboard/hitplan",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Roster",
          path: "/dashboard/roster",
          icon: <GiMeepleGroup />,
        },
        {
          title: "Bosses",
          path: "/dashboard/bosses",
          icon: <GiDeathZone />,
        },
        {
          title: "CB Timelines",
          path: "/dashboard/timelines",
          icon: <GiSwordsEmblem />,
        },
        {
          title: "Guides & Links",
          path: "/dashboard/guides",
          icon: <GiBookCover />,
        },
      ],
    },
    {
      title: "Admin",
      list: [
        {
          title: "Units",
          path: "/dashboard/admin/units",
          icon: <MdWork />,
        },
        {
          title: "Bosses",
          path: "/dashboard/admin/boss",
          icon: <MdAnalytics />,
        },
        {
          title: "Members",
          path: "/dashboard/admin/members",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
      ],
    },
  ];
  



const Sidebar = async () => {
  const session = await auth();
  const { user } = await auth();

    return (
      <div className={styles.container}>
        <div className={styles.user}>
            <Image className={styles.userImage} src={user.img || "/noavatar.png"} alt="" width="50" height="50"/>
            <div className={styles.userDetail}>
            <span className={styles.username}>{user.username}</span>
            <span className={styles.userTitle}>{user.isAdmin ? "Admin" : "Member"}</span>
        </div>
        </div>
        <ul className={styles.list}>
            {menuItems.map(cat=>(
              session?.user?.isAdmin && cat.title === "Admin" ? (
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item=>(
                        <MenuLink item={item} path={item.path} key={item.title}/>
                    ))}                   
                </li>
            ): cat.title !== "Admin" && cat.title === "User" ?
            <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item=>(
                
                <MenuLink item={item} path={`${item.path}/${user.id}`} key={item.title}/>
            ))}                   
        </li> : <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item=>(
                <MenuLink item={item} path={item.path} key={item.title}/>
            ))}                   
        </li>
            ))}
        </ul>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className={styles.logout}>
              <MdLogout />
              Logout
            </button>
          </form>
        </div>
    )
  }
  
  export default Sidebar