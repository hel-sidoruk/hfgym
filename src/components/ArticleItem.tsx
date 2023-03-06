import Section from './UI/Section';
import Text from './UI/Text';
import Title from './UI/Title';
import ImageAnimated from './UI/ImageAnimated';
import { PostInterface } from '@/types';
import { Loader } from './UI/Loader';

const ArticleItem = ({ post }: { post: PostInterface | null }) => {
  return (
    <Section sectionName="article-item__block">
      <div className="article-item__content">
        {post ? (
          <>
            <Title variant="article-item__title">{post.title}</Title>
            <div>
              <ImageAnimated
                src={`/images/articles/${post.image}`}
                alt={post.title}
                className="article-item__image"
              />
              <Text variant="article-item__text">{post.text}</Text>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </Section>
  );
};

export default ArticleItem;
