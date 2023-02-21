const ArticlesSkeleton = ({ num }: { num: number }) => {
  const arr = [];
  for (let i = 0; i < num; i++) arr.push(i);
  return (
    <>
      {arr.map((el) => (
        <div key={el} className="blog__skelet">
          <div className="blog__skeletBottom">
            <div className="blog__textSkelet"></div>
            <div className="blog__textSkelet"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticlesSkeleton;
