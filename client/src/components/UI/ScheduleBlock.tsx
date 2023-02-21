import Link from 'next/link';

const ScheduleBlock = ({ day, trainings, timeArray, styles }) => {
  return (
    <div className={styles.block}>
      <div className={`${styles.mobileHeader} ${styles.cell} ${styles.head}`}>{day}</div>
      <ul className={styles.list}>
        {timeArray.map((timeEl) => (
          <li key={timeEl + day} className={styles.item}>
            <div className={`${styles.cell}`}>{timeEl}</div>
            <div className={`${styles.cell} ${styles.training}`}>
              {trainings
                .filter((el) => el.time === timeEl)
                .map(({ id, link, name }) => (
                  <Link key={id + day} href={link} className={styles.trainingBlock}>
                    {name}
                  </Link>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleBlock;
