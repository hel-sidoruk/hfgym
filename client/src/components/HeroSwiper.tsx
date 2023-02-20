import HomeHeroImage1 from '../public/images/hero1.webp';
import HomeHeroImage2 from '../public/images/hero2.webp';
import HomeHeroImage3 from '../public/images/hero3.webp';
import HomeHeroImage4 from '../public/images/hero4.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const HeroSwiper = ({ wrapperClass }) => {
  return (
    <div className={wrapperClass}>
      <Swiper
        // width={window.innerWidth}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000 }}
        speed={1000}
        loop
      >
        <SwiperSlide style={{ width: '100%' }}>
          <Image
            loading="lazy"
            src={HomeHeroImage1}
            layout="fill"
            alt="holy family photo"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%' }}>
          <Image
            loading="lazy"
            src={HomeHeroImage2}
            layout="fill"
            alt="holy family photo"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%' }}>
          <Image
            loading="lazy"
            src={HomeHeroImage3}
            layout="fill"
            alt="holy family photo"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%' }}>
          <Image
            loading="lazy"
            src={HomeHeroImage4}
            layout="fill"
            alt="holy family photo"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
