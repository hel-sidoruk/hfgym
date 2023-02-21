import { PostInterface } from '@/types';
import ArticlePreview from './ArticlePreview';

const Articles = ({ posts }: { posts: PostInterface[] }) => {
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
