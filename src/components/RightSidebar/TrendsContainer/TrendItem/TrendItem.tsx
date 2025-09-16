import { MoreHorizontal } from "lucide-react"; // or any other library
import styles from "./TrendItem.module.css";

const TrendItem = ({ trend }) => {
  return (
    <article className={styles.trendItem}>
      <div className={styles.trendContent}>
        <div className={styles.category}>{trend.category}</div>
        <div className={styles.name}>{trend.name}</div>
        <div className={styles.postCount}>{trend.postCount}</div>
      </div>
      <button className={styles.moreButton} aria-label="More options">
        <MoreHorizontal size={16} />
      </button>
    </article>
  );
};

export default TrendItem;
