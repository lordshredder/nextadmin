import Card from "@/components/ui/dashboard/card/card"
import Rankings from "@/components/ui/dashboard/rankings/rankings"
import styles from "@/components/ui/dashboard/dashboard.module.css"
import { fetchRankingStats } from "@/lib/data";

export const revalidate = 600;
//export const dynamic = 'force-static';

async function fetchStats() {
  const { tmpDPS, tmpKills, tmpSyncs, tmpTLs, tmpTotal} = await fetchRankingStats();
  return { tmpDPS, tmpKills, tmpSyncs, tmpTLs, tmpTotal};
  // return {
  //   props: {
  //     tmpDPS, tmpKills, tmpSyncs, tmpTLs, tmpTotal
  //   },
  //   revalidate: 3600, // In seconds
  // }
}

const Dashboard = async () => {
  //const { tmpDPS, tmpKills, tmpSyncs, tmpTLs, tmpTotal} = 0;
  const { tmpDPS, tmpKills, tmpSyncs, tmpTLs, tmpTotal} = await fetchStats();
  //const { tmpDPS, tmpKills, tmpSyncs, tmpTLs, tmpTotal} = await fetchRankingStats();
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

  //       <Rankings />

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