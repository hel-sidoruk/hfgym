import Section from './UI/Section';
import Text from './UI/Text';
import Title from './UI/Title';
import ImageAnimated from './UI/ImageAnimated';
import { PostInterface } from '@/types';

const ArticleItem = ({ post }: { post: PostInterface | null }) => {
  return (
    <Section sectionName="article-item__block">
      <div className="article-item__content">
        <Title variant="article-item__title">{post ? post.title : ''}</Title>
        <div>
          {post && (
            <ImageAnimated
              src={`/images/articles/${post.image}`}
              alt={post.title}
              className="article-item__image"
            />
          )}
          <Text variant="article-item__text">{post ? post.text : ''}</Text>
        </div>
      </div>
    </Section>
  );
};

export default ArticleItem;
