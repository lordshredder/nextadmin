import Card from "../ui/dashboard/card/card"
import styles from "../ui/dashboard/dashboard.module.css"
import { fetchRankingStats } from "@/app/lib/data";



const Dashboard = async () => {

  const { tmpDPS, tmpKills, tmpSyncs, tmpTLs, tmpTotal} = await fetchRankingStats();
  tmpDPS.title = tmpDPS.memberobj.member;
  tmpDPS.score = tmpDPS.stats.damage;
  tmpDPS.description = "Most Damage";

  tmpKills.title = tmpKills.memberobj.member;
  tmpKills.score = tmpKills.stats.kills;
  tmpKills.description = "Most Kills";

  tmpSyncs.title = tmpSyncs.memberobj.member;
  tmpSyncs.score = tmpSyncs.stats.syncs;
  tmpSyncs.description = "Most Boss Syncs";

  tmpTLs.title = tmpTLs.memberobj.member;
  tmpTLs.score = tmpTLs.stats.timelines;
  tmpTLs.description = "Most Timelines Created";

  tmpTotal.title = tmpTotal.memberobj.member;
  tmpTotal.score = tmpTotal.stats.total;
  tmpTotal.description = "Highest Total Score";

  // <div className={styles.cards}>
  // <Card item={tmpTLs}/>
  // <Card item={tmpTotal}/>
  // </div>

  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>

      <div className={styles.cards}>
      <Card item={tmpDPS}/>
      <Card item={tmpKills}/>
      <Card item={tmpSyncs}/>
      </div>

      
    </div>
    </div>
  )
}

export default Dashboard