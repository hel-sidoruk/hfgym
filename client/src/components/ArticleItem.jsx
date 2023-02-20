// import ImageAnimated from './UI/ImageAnimated';
import Section from './UI/Section';
import Text from './UI/Text';
import Title from './UI/Title';
import styles from '../styles/article-page.module.scss';
import ImageAnimated from './UI/ImageAnimated';

const ArticleItem = ({ image, title, text }) => {
  return (
    <Section sectionName={styles.block}>
      <div className={styles.content}>
        <Title variant={styles.title}>{title}</Title>
        <div>
          <ImageAnimated src={image} alt={title} className={styles.image} />
          <Text variant={styles.text}>{text}</Text>
        </div>
      </div>
    </Section>
  );
};

export default ArticleItem;
