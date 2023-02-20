import Link from 'next/link';
import styles from '../styles/group.module.scss';

const GroupItem = ({ title, time, days, trainer, to }) => {
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.descr}>
        <div className={styles.field}>
          <span className={styles.smallText}>Время:</span>
          <p className={styles.text}>{time}</p>
        </div>
        <div className={styles.field}>
          <span className={styles.smallText}>Дни:</span>
          <p className={styles.text}>{days}</p>
        </div>
        <div className={styles.field}>
          <span className={styles.smallText}>Тренер:</span>
          <Link href={`/trainers${to}`} scroll={false}>
            <a className={`${styles.text} ${styles.link}`}>{trainer}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
