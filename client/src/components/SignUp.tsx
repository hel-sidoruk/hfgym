import Section from './UI/Section';
import Text from './UI/Text';
import styles from '../styles/signup.module.scss';

const SignUp = ({ signRef }: { signRef: React.RefObject<HTMLFormElement> }) => {
  const handleClick = () => {
    window.scrollTo({
      top: signRef.current?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Section sectionName={'sign-up'}>
      <div className={styles.content}>
        <Text variant={styles.text}>Первая тренировка - бесплатно!</Text>
        <button className={`btn ${styles.btn}`} onClick={handleClick}>
          Записаться
        </button>
      </div>
    </Section>
  );
};

export default SignUp;
