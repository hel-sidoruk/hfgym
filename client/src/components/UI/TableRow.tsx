import Link from 'next/link';

const TableRow = ({ time, trainings, days, styles }) => {
  return <>
    <div className={`${styles.cell} ${styles.time}`}>{time}</div>
    {days.map((day) =>
      trainings.filter((el) => el.day.includes(day) && el.time === time) ? (
        <div key={day + time} className={`${styles.cell} ${styles.training}`}>
          {trainings
            .filter((el) => el.day.includes(day) && el.time === time)
            .map(({ id, name, link }) => (
              <Link key={id + day} href={link} className={styles.trainingBlock}>
                {name}
              </Link>
            ))}
        </div>
      ) : (
        <div className={styles.cell}></div>
      )
    )}
  </>;
};

export default TableRow;
