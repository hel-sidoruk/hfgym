import ClassCard from './ClassCard';
import { cardsContent } from '../utils/cards';
import Title from './UI/Title';
import Section from './UI/Section';
import Link from 'next/link';

const Classes = () => {
  return (
    <Section>
      <Title variant={'w-65'}>
        В нашем зале проходят тренировки по&nbsp;следующим направлениям:
      </Title>
      <div className="classes__box">
        {cardsContent.map(({ id, to, image, text }) =>
          image ? (
            <ClassCard key={id} to={to} image={image} text={text} />
          ) : (
            <ClassCard key={id} text={text} />
          )
        )}
        <Link href="/schedule" className="classes__openSchedule btn btn-fill btn-arrow">
          Pасписание
        </Link>
      </div>
    </Section>
  );
};

export default Classes;
