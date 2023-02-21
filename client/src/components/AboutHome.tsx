import Section from './UI/Section';
import Text from './UI/Text';
import Title from './UI/Title';

const AboutHome = () => {
  return (
    <Section sectionName="about-home">
      <div className="about-home__info">
        <Title variant={'align-center'}>О нас</Title>
        <Text variant="about-home__text">
          Клуб единоборств «Holy family gym» был создан в 2010 году.
        </Text>
        <Text variant="about-home__text">
          В начале 2019 года спортсмены нашего клуба стали полноправными членами международной
          ассоциации Dragons den ZRT, которая ставит своей целью подготовку спортсменов высокого
          уровня для выступления на международных чемпионатах.
        </Text>
        <Text variant="about-home__text">
          В рамках ассоциации мы развиваем следующие направления единоборств: бразильское
          джиу-джитсу, ММА, грэпплинг, муай-тай, вольная борьба.
        </Text>
        <Text variant="about-home__text">
          За несколько лет существования Клуба наши спортсмены становились чемпионами и призерами
          более чем в 50 турнирах по представленным направлениям.
        </Text>
      </div>
    </Section>
  );
};

export default AboutHome;
