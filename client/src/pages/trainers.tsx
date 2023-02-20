// import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
// import TrainersList from '../components/TrainersList';
import Background from '../components/UI/Background';
import Section from '../components/UI/Section';
import Title from '../components/UI/Title';
import styles from '../styles/trainers.module.scss';

export default function TrainersPage() {
  return (
    <>
      <Head>
        <title>Тренеры | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренеры Holy Family Gym. Тренировки по бразильскому джиу-джитсу, тайскому боксу, грэпплингу, ММА, вольной борьбе в Минске"
        />
      </Head>
      <Background page={'trainers-page'} />
      <Section sectionName={'trainers'}>
        <Title variant={'trainers-title'}>Наши тренеры</Title>
        {/* <TrainersList trainers={trainers} styles={styles} /> */}
        <div className={styles.btns}>
          <Link href="/schedule">
            <a className={`btn ${styles.btn}`}>Открыть расписание</a>
          </Link>
          <Link href="/contacts#form">
            <a className={`btn ${styles.btn}`}>Записаться на тренировку</a>
          </Link>
        </div>
      </Section>
    </>
  );
}
