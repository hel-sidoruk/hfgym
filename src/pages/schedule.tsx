import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Background from '@/components/UI/Background';
import Section from '@/components/UI/Section';
import SignLink from '@/components/UI/SignLink';
import Title from '@/components/UI/Title';
import { ScheduleMobile, Schedule } from '@/components/Schedule';

export default function SchedulePage() {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    axios.get('/api/schedule').then(({ data }) => setSchedule(data));
  }, []);
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
