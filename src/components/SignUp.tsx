import Section from './UI/Section';
import Text from './UI/Text';
import styles from '../styles/signup.module.scss';
import Link from 'next/link';

const SignUp = () => {
  return (
    <Section sectionName={'sign-up'}>
      <div className={styles.content}>
        <Text variant={styles.text}>Первая тренировка - бесплатно!</Text>
        <Link href="/contacts#form" className={`btn ${styles.btn}`}>
          Записаться
        </Link>
      </div>
    </Section>
  );
};

export default SignUp;
