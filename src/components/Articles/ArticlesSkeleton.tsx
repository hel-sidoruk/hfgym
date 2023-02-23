export const ArticlesSkeleton = ({ num }: { num: number }) => {
  const arr = Array(num)
    .fill(0)
    .map((_, i) => i);
  return (
    <>
      {arr.map((el) => (
        <div key={el} className="blog__skelet">
          <div className="blog__skeletImage"></div>
        </div>
      ))}
    </>
  );
};
