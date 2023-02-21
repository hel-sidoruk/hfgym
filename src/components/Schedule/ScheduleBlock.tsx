import { ScheduleInterface } from '@/types';
import Link from 'next/link';

interface Props {
  day: string;
  trainings: ScheduleInterface[];
  timeArray: string[];
}

export const ScheduleBlock = ({ day, trainings, timeArray }: Props) => {
  return (
    <div className="schedule__block">
      <div className="schedule__mobileHeader schedule__cell schedule__head">{day}</div>
      <ul className="schedule__list">
        {timeArray.map((timeEl) => (
          <li key={timeEl + day} className="schedule__item">
            <div className="schedule__cell">{timeEl}</div>
            <div className="schedule__cell schedule__training">
              {trainings
                .filter((el) => el.time === timeEl)
                .map(({ id, link, name }) => (
                  <Link key={id + day} href={link} className="schedule__trainingBlock">
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
