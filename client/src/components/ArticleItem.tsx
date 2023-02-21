import Section from './UI/Section';
import Text from './UI/Text';
import Title from './UI/Title';
import ImageAnimated from './UI/ImageAnimated';

const ArticleItem = ({ image, title, text }: { image: string; title: string; text: string }) => {
  return (
    <Section sectionName="article-item__block">
      <div className="article-item__content">
        <Title variant="article-item__title">{title}</Title>
        <div>
          <ImageAnimated src={image} alt={title} className="article-item__image" />
          <Text variant="article-item__text">{text}</Text>
        </div>
      </div>
    </Section>
  );
};

export default ArticleItem;
