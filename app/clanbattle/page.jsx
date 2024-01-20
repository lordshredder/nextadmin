import styles from "@/components/ui/login/login.module.css";
import BossForm from "@/components/ui/dashboard/admin/boss/bossForm";
export const revalidate = 45;
const Clanbattle = async () => {

  return (

    <div className={styles.container}>
    <BossForm/>
  </div>
  );
};

export default Clanbattle;