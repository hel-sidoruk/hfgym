import ScheduleBlock from './UI/ScheduleBlock';

const ScheduleMobile = ({ schedule, styles }) => {
  const monWenFr = schedule.filter((el) => el.day.includes('Понедельник'));
  const tueThur = schedule.filter((el) => el.day.includes('Вторник'));
  const saturday = schedule.filter((el) => el.day.includes('Суббота'));

  const timeArray1 = ['7:30', '18:00', '18:30', '19:00', '20:00'];
  const timeArray2 = ['8:00', '18:30', '20:00'];
  const timeArray3 = ['11:00', '12:00'];

  return (
    <div className={styles.mobile}>
      <div className="schedule-mobile__content">
        <ScheduleBlock
          styles={styles}
          day={'Понедельник'}
          trainings={monWenFr}
          timeArray={timeArray1}
        />
        <ScheduleBlock
          styles={styles}
          day={'Вторник'}
          trainings={tueThur}
          timeArray={timeArray2}
        />
        <ScheduleBlock
          styles={styles}
          day={'Среда'}
          trainings={monWenFr}
          timeArray={timeArray1}
        />
        <ScheduleBlock
          styles={styles}
          day={'Четверг'}
          trainings={tueThur}
          timeArray={timeArray2}
        />
        <ScheduleBlock
          styles={styles}
          day={'Пятница'}
          trainings={monWenFr}
          timeArray={timeArray1}
        />
        <ScheduleBlock
          styles={styles}
          day={'Суббота'}
          trainings={saturday}
          timeArray={timeArray3}
        />
      </div>
    </div>
  );
};

export default ScheduleMobile;
