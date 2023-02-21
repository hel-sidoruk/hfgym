import Text from './UI/Text';
import { useInView } from 'react-intersection-observer';

const AboutTextBlock = ({
  position,
  textArray,
}: {
  position: string;
  textArray: { id: number; text: string }[];
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <div
      ref={ref}
      className={`about__block ${position} ${inView ? 'image-anim-1' : 'image-anim-0'}`}
    >
      <div className="container">
        {textArray.map(({ id, text }) => (
          <Text key={id} variant={'space'}>
            {text}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default AboutTextBlock;
