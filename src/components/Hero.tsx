import Image from 'next/image';
import HeroSwiper from './HeroSwiper';

const Hero = ({ home }: { home?: boolean }) => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth',
    });
  };

  return home ? (
    <section className="hero" onClick={handleClick}>
      <HeroSwiper wrapperClass="hero__swiper" />
      <div className="container hero__container">
        <h1 className="hero__title">Holy family gym</h1>
        <p className="hero__descr">Зал единоборств в Минске</p>
      </div>
    </section>
  ) : (
    <section className="hero__about" onClick={handleClick}>
      <Image
        priority={true}
        src="/images/about-hero.webp"
        alt="holy family photo"
        fill
        sizes="100vw"
      />
    </section>
  );
};

export default Hero;
