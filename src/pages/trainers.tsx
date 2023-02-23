import { TrainerItem } from '@/components/TrainerItem';
import { TrainerInterface } from '@/types';
import Head from 'next/head';
import Link from 'next/link';
import Background from '../components/UI/Background';
import Section from '../components/UI/Section';
import Title from '../components/UI/Title';
import { getKnex } from '../../knex';

export async function getStaticProps() {
  const knex = getKnex();
  const data = await knex('trainers').orderBy('createdAt', 'asc');
  const trainers = JSON.parse(JSON.stringify(data));

  return {
    props: { trainers },
  };
}

export default function TrainersPage({ trainers }: { trainers: TrainerInterface[] }) {
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
        <div>
          {trainers.map((trainer) => (
            <TrainerItem key={trainer.id} trainer={trainer} />
          ))}
        </div>
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
