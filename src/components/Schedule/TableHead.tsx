export const TableHead = ({ days }: { days: string[] }) => {
  return (
    <>
      <div className="schedule__cell"></div>
      {days.map((day) => (
        <div key={day} className="schedule__cell schedule__head">
          {day}
        </div>
      ))}
    </>
  );
};
