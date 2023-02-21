import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TrainersList from '../components/TrainersList';
import Background from '../components/UI/Background';
import Section from '../components/UI/Section';
import Title from '../components/UI/Title';

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get('/api/trainers').then(({ data }) => setTrainers(data));
  }, []);
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
        <TrainersList trainers={trainers} />
        <div className="trainers__btns">
          <Link href="/schedule" className="btn trainers__btn">
            Открыть расписание
          </Link>
          <Link href="/contacts#form" className="btn trainers__btn">
            Записаться на тренировку
          </Link>
        </div>
      </Section>
    </>
  );
}
