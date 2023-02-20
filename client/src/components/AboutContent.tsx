import { aboutTexts } from '../utils/aboutPageText';
import AboutTextBlock from './AboutTextBlock';
import Title from './UI/Title';

const AboutContent = () => {
  return (
    <section className="about-content">
      <Title variant={'align-center'}>О нашем клубе</Title>
      {aboutTexts.map(({ textArray, position }) => (
        <AboutTextBlock
          key={position}
          textArray={textArray}
          position={position}
        />
      ))}
    </section>
  );
};

export default AboutContent;
