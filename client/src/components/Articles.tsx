import ArticlePreview from './ArticlePreview';

const Articles = ({ posts }) => {
  return (
    <>
      {posts.map(({ id, image, title, descr }) => (
        <ArticlePreview
          key={id}
          image={`/images/articles/${image}`}
          title={title}
          descr={descr}
          id={id}
          home={true}
        />
      ))}
    </>
  );
};

export default Articles;
