import Section from './UI/Section';
import Title from './UI/Title';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ArticlePreview from './ArticlePreview';
import Link from 'next/link';
import styles from '../styles/news.module.scss';

const News = ({ news }) => {
  return (
    <Section sectionName={'news'}>
      <Title>Последние новости</Title>
      <Swiper
        className={styles.content}
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
      <div className={styles.navBtns}>
        <button className={`btn nav-btn nav-btn--left prev ${styles.navBtn}`}>
          Назад
        </button>
        <button className={`btn nav-btn nav-btn--right next ${styles.navBtn}`}>
          Вперед
        </button>
      </div>
      <Link href="/blog">
        <a className={`btn btn-arrow ${styles.btn}`}>Перейти в блог</a>
      </Link>
    </Section>
  );
};

export default News;
