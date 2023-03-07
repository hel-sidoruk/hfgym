import { aboutTexts } from '../utils/aboutPageText';
import AboutTextBlock from './AboutTextBlock';
import Text from './UI/Text';
import Title from './UI/Title';

const AboutContent = () => {
  return (
    <section className="about">
      <Title variant={'align-center'}>О нашем клубе</Title>
      {aboutTexts.map(({ textArray, position }) => (
        <AboutTextBlock key={position} textArray={textArray} position={position} />
      ))}
      <div className="about__film">
        <Text>Короткометражный фильм о Holy Family Gym.</Text>
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/maH5q8Avlew"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default AboutContent;
