import Head from 'next/head';
import Background from '@/components/UI/Background';
import Section from '@/components/UI/Section';
import SignLink from '@/components/UI/SignLink';
import Title from '@/components/UI/Title';
import { ScheduleMobile, Schedule } from '@/components/Schedule';
import { getKnex } from '../../knex';
import { ScheduleInterface } from '@/types';

export async function getStaticProps() {
  const knex = getKnex();
  const data = await knex('schedules');
  const schedule = JSON.parse(JSON.stringify(data));

  return {
    props: { schedule },
  };
}

export default function SchedulePage({ schedule }: { schedule: ScheduleInterface[] }) {
  console.log(schedule);
  return (
    <>
      <Head>
        <title>Расписание | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Расписание тренировок в зале Holy Family Gym. Бразильское джиу-джитсу, Вольная борьба, Грэпплинг, Тайский бокс, ММА, детские тренировки"
        />
      </Head>
      <Background page={'trains-page'} />
      <Section sectionName={'disciplines'}>
        <Title>Тренировки</Title>
        <Schedule schedule={schedule} />
        <ScheduleMobile schedule={schedule} />
        <SignLink />
      </Section>
    </>
  );
}
