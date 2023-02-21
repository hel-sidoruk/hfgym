import ArticlePreview from './ArticlePreview';

const Articles = ({
  posts,
}: {
  posts: { id: number; image: string; title: string; descr: string }[];
}) => {
  return (
    <>
      {posts.map(({ id, image, title, descr }) => (
        <ArticlePreview
          key={id}
          image={`/images/articles/${image}`}
          title={title}
          descr={descr}
          id={id}
        />
      ))}
    </>
  );
};

export default Articles;
