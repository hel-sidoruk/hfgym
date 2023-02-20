import Section from './UI/Section';
import Title from './UI/Title';

const Discipline = ({ title, children, centered }) => {
  return (
    <Section sectionName={'disciplines'}>
      {centered ? (
        <Title variant={'align-center'}>{title}</Title>
      ) : (
        <Title>{title}</Title>
      )}
      {children}
    </Section>
  );
};

export default Discipline;
