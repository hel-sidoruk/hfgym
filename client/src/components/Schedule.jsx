import TableHead from './UI/TableHead';
import TableRow from './UI/TableRow';

const Schedule = ({ schedule, styles }) => {
  const monTueWen = schedule.filter(
    (el) => el.day.includes('Понедельник') || el.day.includes('Вторник')
  );
  const timeArray1 = ['7:30', '8:00', '18:00', '18:30', '19:00', '20:00'];
  const timeArray2 = [
    '7:30',
    '8:00',
    '11:00',
    '12:00',
    '18:00',
    '18:30',
    '19:00',
    '20:00',
  ];
  const monTueWenArray = ['Понедельник', 'Вторник', 'Среда'];
  const thurFrSatArray = ['Четверг', 'Пятница', 'Суббота'];

  return (
    <div className={styles.schedule}>
      <div className={styles.content}>
        <TableHead days={monTueWenArray} styles={styles} />
        {timeArray1.map((timeEl) => (
          <TableRow
            styles={styles}
            key={timeEl + 1}
            time={timeEl}
            trainings={monTueWen}
            days={monTueWenArray}
          />
        ))}
      </div>
      <div className={styles.content}>
        <TableHead days={thurFrSatArray} styles={styles} />
        {timeArray2.map((timeEl) => (
          <TableRow
            styles={styles}
            key={timeEl + 2}
            time={timeEl}
            trainings={schedule}
            days={thurFrSatArray}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
