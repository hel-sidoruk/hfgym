import Head from 'next/head';
import Bjj from '../../components/Bjj';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';
// import ImageAnimated from '../../components/UI/ImageAnimated';
import styles from '../../styles/discipline.module.scss';

const BjjPage = () => {
  return (
    <>
      <Head>
        <title>Бразильское джиу-джитсу | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренировки по Бразильскому джиу-джитсу в Минске в Holy Family Gym. Утренние и вечерние группы, группа для начинающих"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Бразильское джиу-джитсу">
        <Bjj styles={styles} />
      </Discipline>
      {/* <ImageAnimated
        src={'/images/disciplines/bjj8.webp'}
        className={`${styles.image} ${styles.imageLeft} ${styles.noRadius}`}
        alt={'Бразильское джиу-джитсу'}
      /> */}
    </>
  );
};

export default BjjPage;
