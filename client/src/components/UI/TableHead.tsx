const TableHead = ({ days, styles }) => {
  return (
    <>
      <div className={styles.cell}></div>
      {days.map((day) => (
        <div key={day} className={`${styles.cell} ${styles.head}`}>
          {day}
        </div>
      ))}
    </>
  );
};

export default TableHead;
