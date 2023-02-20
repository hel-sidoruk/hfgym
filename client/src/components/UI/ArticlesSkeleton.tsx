const ArticlesSkeleton = ({ styles, num }) => {
  let arr = [];
  for (let i = 0; i < num; i++) arr.push(i);
  return (
    <>
      {arr.map((el) => (
        <div key={el} className={`${styles.skelet}`}>
          <div className={styles.skeletBottom}>
            <div className={styles.textSkelet}></div>
            <div className={styles.textSkelet}></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticlesSkeleton;
