import Link from 'next/link';
import styles from '../../styles/sign-link.module.scss';

const SignLink = () => {
  return (
    <div className={styles.btnBox}>
      <Link href="/contacts#form">
        <a className={`btn btn-fill ${styles.btn}`}>Записаться на тренировку</a>
      </Link>
    </div>
  );
};

export default SignLink;
