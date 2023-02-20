import ClassCard from './ClassCard';
import { cardsContent } from '../utils/cards';
import Title from './UI/Title';
import Section from './UI/Section';
import Link from 'next/link';
import styles from '../styles/classes.module.scss';

const Classes = () => {
  return (
    <Section>
      <Title variant={'w-65'}>
        В нашем зале проходят тренировки по&nbsp;следующим направлениям:
      </Title>
      <div className={styles.box}>
        {cardsContent.map(({ id, to, image, text }) =>
          image ? (
            <ClassCard key={id} to={to} styles={styles} image={image} text={text} />
          ) : (
            <ClassCard styles={styles} key={id} text={text} />
          )
        )}
        <Link href="/schedule">
          <a className={`${styles.openSchedule} btn btn-fill btn-arrow`}>Pасписание</a>
        </Link>
      </div>
    </Section>
  );
};

export default Classes;
