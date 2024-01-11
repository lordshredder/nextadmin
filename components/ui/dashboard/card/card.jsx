import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <Image className={styles.userImage} src={item.memberobj.avatar} alt="" width="50" height="50"/>
        <span className={styles.number}>{item.score}</span>
        <span className={styles.detail}>
          {item.description}
        </span>
      </div>
    </div>
  );
};

export default Card;