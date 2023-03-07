import { ScheduleInterface } from '@/types';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

export const Schedule = ({ schedule }: { schedule: ScheduleInterface[] }) => {
  const monTueWen = schedule.filter(
    (el) => el.day.includes('Понедельник') || el.day.includes('Вторник')
  );
  const timeArray1 = ['7:30', '8:00', '18:00', '18:30', '19:00', '20:00'];
  const timeArray2 = [
    '7:30',
    '8:00',
    '10:00',
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
    <div className="schedule">
      <div className="schedule__content">
        <TableHead days={monTueWenArray} />
        {timeArray1.map((timeEl) => (
          <TableRow key={timeEl + 1} time={timeEl} trainings={monTueWen} days={monTueWenArray} />
        ))}
      </div>
      <div className="schedule__content">
        <TableHead days={thurFrSatArray} />
        {timeArray2.map((timeEl) => (
          <TableRow key={timeEl + 2} time={timeEl} trainings={schedule} days={thurFrSatArray} />
        ))}
      </div>
    </div>
  );
};
