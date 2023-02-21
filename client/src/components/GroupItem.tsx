import Link from 'next/link';

interface Props {
  title: string;
  time: string;
  days: string;
  trainer: string;
  to?: string;
}

const GroupItem = ({ title, time, days, trainer, to }: Props) => {
  return (
    <div className="group-item">
      <div className="group-item__top">
        <h3 className="group-item__title">{title}</h3>
      </div>
      <div className="group-item__descr">
        <div className="group-item__field">
          <span className="group-item__smallText">Время:</span>
          <p className="group-item__text">{time}</p>
        </div>
        <div className="group-item__field">
          <span className="group-item__smallText">Дни:</span>
          <p className="group-item__text">{days}</p>
        </div>
        <div className="group-item__field">
          <span className="group-item__smallText">Тренер:</span>
          <Link
            href={`/trainers${to}`}
            scroll={false}
            className="group-item__text group-item__link"
          >
            {trainer}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
