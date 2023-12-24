import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>MVP</span>
        <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
        <span className={styles.number}>8976</span>
        <span className={styles.detail}>
          <span className={9 > 0 ? styles.positive : styles.negative}>
            12%
          </span>{" "}
          {9 > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;