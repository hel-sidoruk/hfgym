import { ScheduleInterface } from '@/types';
import Link from 'next/link';

interface Props {
  time: string;
  trainings: ScheduleInterface[];
  days: string[];
}

export const TableRow = ({ time, trainings, days }: Props) => {
  const filterTrainings = (day: string) =>
    trainings.filter((el) => el.day.includes(day) && el.time === time);
  return (
    <>
      <div className="schedule__cell schedule__time">{time}</div>
      {days.map((day) =>
        filterTrainings(day) ? (
          <div key={day + time} className="schedule__cell schedule__training">
            {filterTrainings(day).map(({ id, name, link }) => (
              <Link key={id + day} href={link} className="schedule__trainingBlock">
                {name}
              </Link>
            ))}
          </div>
        ) : (
          <div key={day} className="schedule__cell"></div>
        )
      )}
    </>
  );
};
