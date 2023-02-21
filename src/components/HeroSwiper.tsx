import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const HeroSwiper = ({ wrapperClass }: { wrapperClass: string }) => {
  return (
    <div className={wrapperClass}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000 }}
        speed={1000}
        loop
      >
        <SwiperSlide style={{ width: '100%' }}>
          <Image loading="lazy" src="/images/hero1.webp" fill alt="holy family photo" />
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%' }}>
          <Image loading="lazy" src="/images/hero2.webp" fill alt="holy family photo" />
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%' }}>
          <Image loading="lazy" src="/images/hero3.webp" fill alt="holy family photo" />
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%' }}>
          <Image loading="lazy" src="/images/hero4.webp" fill alt="holy family photo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
