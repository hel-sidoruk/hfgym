import Image from 'next/image';

const Hero = ({ home }: { home?: boolean }) => {
  return home ? (
    <section className="hero">
      <video className="hero__video" src="/hfgym-video.mp4" muted loop autoPlay />
      <div className="container hero__container">
        <h1 className="hero__title">Holy family gym</h1>
        <p className="hero__descr">Зал единоборств в Минске</p>
      </div>
    </section>
  ) : (
    <section className="hero__about">
      <Image
        priority={true}
        src="/images/about-hero.webp"
        alt="holy family photo"
        fill
        sizes="100vw"
      />
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Holy family gym</h1>
          <p className="hero__descr">Зал единоборств в Минске</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
