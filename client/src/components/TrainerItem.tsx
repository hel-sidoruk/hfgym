import Text from './UI/Text';
import Title from './UI/Title';
import Subtitle from './UI/Subtitle';
import ImageAnimated from './UI/ImageAnimated';

export const TrainerItem = ({ id, image, name, text, disciplines, styles }) => {
  const textArray = text.replace(/\r/g, '').split('\n').filter(Boolean);
  const names = {
    1: 'viktor-nikonov',
    2: 'evgeniy-rutko',
    3: 'pavel-staritskiy',
    4: 'evgeniy-aleshkevich',
    5: 'nikita-sachno',
    6: 'evgeniy-akulich',
  };
  return (
    <div className={styles.item}>
      <ImageAnimated
        wrapClass={styles.wrapper}
        className={styles.image}
        src={`/images/trainers/${image.replace('.jpg', '.webp')}`}
        alt="trainer photo"
      />
      <div className={styles.info}>
        <Title variant={styles.title}>{name}</Title>
        <Subtitle variant={styles.disciplines}>{disciplines}</Subtitle>
        <div className={styles.textBlock}>
          {textArray.map((elem, i) => (
            <Text variant={styles.text} key={i}>
              {elem}
            </Text>
          ))}
        </div>
      </div>
      <span aria-hidden={true} id={names[id]} className={styles.hidden}></span>
    </div>
  );
};
