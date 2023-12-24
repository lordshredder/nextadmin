import Image from "next/image";
import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

  import { GiDeathZone, GiMeepleGroup, GiBookmarklet  } from "react-icons/gi";
import MenuLink from "./menuLink/menuLink";
  //import { auth, signOut } from "@/app/auth";
  
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
          title: "Members",
          path: "/dashboard/members",
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
          icon: <GiBookmarklet />,
        },
      ],
    },
    {
      title: "Admin",
      list: [
        {
          title: "Units",
          path: "/dashboard/units",
          icon: <MdWork />,
        },
        {
          title: "Bosses",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Members",
          path: "/dashboard/teams",
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
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  



const Sidebar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.user}>
            <Image className={styles.userImage} src="https://cdn.discordapp.com/avatars/197052858628177920/2d8371395b474741d27efd8660ce3283.webp" alt="" width="50" height="50"/>
            <div className={styles.userDetail}>
            <span className={styles.username}>Pai</span>
            <span className={styles.userTitle}>Administrator</span>
        </div>
        </div>
        <ul className={styles.list}>
            {menuItems.map(cat=>(
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item=>(
                        <MenuLink item={item} key={item.title}/>
                    ))}                   
                </li>
            ))}
        </ul>
            <button className={styles.logout}>
              <MdLogout />
              Logout
            </button>
        </div>
    )
  }
  
  export default Sidebar