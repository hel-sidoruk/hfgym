import Section from './UI/Section';
import Text from './UI/Text';
import styles from '../styles/signup.module.scss';

const SignUp = () => {
  return (
    <Section sectionName={'sign-up'}>
      <div className={styles.content}>
        <Text variant={styles.text}>Первая тренировка - бесплатно!</Text>
        <button className={`btn ${styles.btn}`}>Записаться</button>
      </div>
    </Section>
  );
};

export default SignUp;
