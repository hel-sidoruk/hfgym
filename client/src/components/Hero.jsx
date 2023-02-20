import Image from 'next/image';
import styles from '../styles/hero.module.scss';
import HeroSwiper from './HeroSwiper';

const Hero = ({ home }) => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth',
    });
  };

  return home ? (
    <section className={styles.hero} onClick={handleClick}>
      <HeroSwiper wrapperClass={styles.swiper} />
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>Holy family gym</h1>
        <p className={styles.descr}>Зал единоборств в Минске</p>
      </div>
    </section>
  ) : (
    <section className={styles.about} onClick={handleClick}>
      <Image
        priority="true"
        src="/images/about-hero.webp"
        layout="fill"
        alt="holy family photo"
      />
    </section>
  );
};

export default Hero;
