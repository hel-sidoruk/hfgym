import Section from './UI/Section';
import Title from './UI/Title';

interface Props {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}
const Discipline = ({ title, children, centered }: Props) => {
  return (
    <Section sectionName={'disciplines'}>
      {centered ? <Title variant={'align-center'}>{title}</Title> : <Title>{title}</Title>}
      {children}
    </Section>
  );
};

export default Discipline;
