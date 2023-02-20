import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>

          <Image
            layout="fill"
            src="/images/logo-footer.png"
            alt="HolyFamily logo"
          />

        </Link>
        <div className={styles.info}>
          <p className={styles.text}>Мы в социальных сетях:</p>
          <div className={styles.social}>
            <a
              target="_blank"
              className={styles.socialLink}
              href="https://vk.com/bjj_holyfamilygym"
              rel="noreferrer"
            >
              <Image layout="fill" src="/icons/vk.svg" alt="vk icon" />
            </a>
            <a
              target="_blank"
              className={styles.socialLink}
              href="https://www.instagram.com/holyfamilygym/"
              rel="noreferrer"
            >
              <Image
                layout="fill"
                src="/icons/instagram.svg"
                alt="instagram icon"
              />
            </a>
            <a
              target="_blank"
              className={styles.socialLink}
              href="https://facebook.com/HolyFamilyGym/"
              rel="noreferrer"
            >
              <Image layout="fill" src="/icons/fb.svg" alt="facebook icon" />
            </a>
          </div>
          <a
            className={`${styles.text} ${styles.tel}`}
            href="tel:+375292765915"
          >
            +375(29) 276-59-15
          </a>
          <address className={`${styles.text} ${styles.address}`}>
            г. Минск, ул. Михася Лынькова 19/1
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
