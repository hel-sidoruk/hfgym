import { ScheduleInterface } from '@/types';
import { ScheduleBlock } from './ScheduleBlock';

export const ScheduleMobile = ({ schedule }: { schedule: ScheduleInterface[] }) => {
  const monWenFr = schedule.filter((el) => el.day.includes('Понедельник'));
  const tueThur = schedule.filter((el) => el.day.includes('Вторник'));
  const saturday = schedule.filter((el) => el.day.includes('Суббота'));

  const timeArray1 = ['7:30', '18:00', '18:30', '19:00', '20:00'];
  const timeArray2 = ['9:00', '18:30', '20:00'];
  const timeArray3 = ['9:30', '10:00', '11:00', '12:00'];

  return (
    <div className="schedule__mobile">
      <div className="schedule-mobile__content">
        <ScheduleBlock day={'Понедельник'} trainings={monWenFr} timeArray={timeArray1} />
        <ScheduleBlock day={'Вторник'} trainings={tueThur} timeArray={timeArray2} />
        <ScheduleBlock day={'Среда'} trainings={monWenFr} timeArray={timeArray1} />
        <ScheduleBlock day={'Четверг'} trainings={tueThur} timeArray={timeArray2} />
        <ScheduleBlock day={'Пятница'} trainings={monWenFr} timeArray={timeArray1} />
        <ScheduleBlock day={'Суббота'} trainings={saturday} timeArray={timeArray3} />
      </div>
    </div>
  );
};
