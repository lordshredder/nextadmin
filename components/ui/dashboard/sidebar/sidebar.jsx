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
import { auth } from "@/lib/auth";
import ClientSidebar from "./clientsidebar/clientsidebar";
  
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
//
    return (
      <>
      <ClientSidebar session={session} user={user} />
      </>
    )
  }
  
  export default Sidebar