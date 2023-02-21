import Section from './UI/Section';
import Title from './UI/Title';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ArticlePreview from './ArticlePreview';
import Link from 'next/link';
import { PostInterface } from '@/types';

const News = ({ news }: { news: PostInterface[] }) => {
  return (
    <Section sectionName={'news'}>
      <Title>Последние новости</Title>
      <Swiper
        className="news__content"
        modules={[Navigation]}
        speed={400}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          577: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {news.map(({ id, image, title, descr }) => (
          <SwiperSlide key={id}>
            <ArticlePreview
              image={`/images/articles/${image.replace('.jpg', '.webp')}`}
              title={title}
              descr={descr}
              id={id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="news__navBtns">
        <button className="btn nav-btn nav-btn--left prev news__navBtn">Назад</button>
        <button className="btn nav-btn nav-btn--right next news__navBtn">Вперед</button>
      </div>
      <Link href="/blog" className="btn btn-arrow news__btn">
        Перейти в блог
      </Link>
    </Section>
  );
};

export default News;
