import styles from "@/components/ui/login/login.module.css";
import BossForm from "@/components/ui/dashboard/admin/boss/bossForm";
const Clanbattle = async () => {

  //const id = "197052858628177920";
  //const member = await fetchMember(id);
  const rnd = Math.floor(Math.random() * 45)+1;

  const plainBoss = {
    imagelink: `/boss/${rnd.toString().padStart(2, '0')}.webp`,
    name: "Evil Boss",
    id: `0${rnd}`,
    element: "Dark",
    rank: 1,
    attacktype: "Physical",
    multitarget: 1,
    hp: 2700000000,
    def: 850,
    mdef: 850
  }
  return (

    <div className={styles.container}>
    <BossForm/>
  </div>
  );
};

export default Clanbattle;