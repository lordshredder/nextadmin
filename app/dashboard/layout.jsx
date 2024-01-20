import Sidebar from "@/components/ui/dashboard/sidebar/sidebar"
import styles from "@/components/ui/dashboard/dashboard.module.css"
import Navbar from "@/components/ui/dashboard/navbar/navbar"
const Layout = ({children}) => {
    return (
      <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            
            {children}
        </div>
      </div>
    )
  }
  
  export default Layout