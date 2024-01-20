"use client"
import styles from "@/components/ui/dashboard/admin/members/singleMember/singleMember.module.css";
import Image from "next/image";
import { updateBoss } from "@/lib/actions";
import { useFormState } from "react-dom";
import { toast } from 'sonner';
import { useEffect } from "react";



const BossForm = () => {
    const rnd = Math.floor(Math.random() * 45)+1;
    const boss = {
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
    const [state, formAction] = useFormState(updateBoss, {
      message: "",
      errors: undefined,
  });

  useEffect(() => {
    if(state.message === "success"){
      toast.success('Success!')
    } else if(state.message === "error") {
      toast.error(state.errors)
    }
    });


    return (
      <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}> 
            <Image src={boss.imagelink || "/boss/01.webp"} alt="" fill />
          </div>
          {boss.name}
        </div>
        <div className={styles.formContainer}>
          <form action={formAction} className={styles.form}>
            <input type="hidden" name="id" value={boss.id}/>
            <div className={styles.inputgroup}>
              <div className={styles.childrengroup}>
                <label>Boss</label>
                <input type="text" name="name" placeholder={boss.name} />
              </div>
              <div className={styles.childrengroup}>
                <label>Imagelink</label>
                <input type="text" name="imagelink" placeholder={boss.imagelink} />
              </div>
              <div className={styles.childrengroup}>
                <label>Rank</label>
                <input type="number" name="rank" placeholder={boss.rank} />
              </div>
            </div>
            <div className={styles.inputgroup}>
              <div className={styles.childrengroup}>
              <label>Attacktype</label>
              <input type="text" name="attacktype" placeholder={boss.attacktype} />
              </div>
              <div className={styles.childrengroup}>
              <label>Multitarget</label>
              <input type="number" name="multitarget" placeholder={boss.multitarget} />
              </div>
            </div>
            <div className={styles.inputgroup}>
              <div className={styles.childrengroup}>
              <label>HP</label>
              <input type="number" name="hp" placeholder={boss.hp} />
              </div>
              <div className={styles.childrengroup}>
              <label>DEF</label>
              <input type="number" name="def" placeholder={boss.def} />
              </div>
              <div className={styles.childrengroup}>
              <label>MDEF</label>
              <input type="number" name="mdef" placeholder={boss.mdef} />
              </div>
            </div>
            <label>Element</label>
            <input type="text" name="element" placeholder={boss.element} />
          <button>Update</button>

          </form>
        </div>
        </div>
      </>
    );
  };
  
  export default BossForm;