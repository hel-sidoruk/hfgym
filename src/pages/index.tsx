import Head from 'next/head';
import { useEffect, useState } from 'react';
import AboutHome from '../components/AboutHome';
import Classes from '../components/Classes';
import Hero from '../components/Hero';
import SignUp from '../components/SignUp';
import Background from '../components/UI/Background';
import News from '../components/News';
import axios from 'axios';
import { ApplicationForm } from '@/components/ApplicationForm';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/api/articles').then(({ data }) => setNews(data));
  }, []);

  return (
    <>
      <Head>
        <title>Holy Family Gym | Зал единоборств в Минске</title>
        <meta
          name="description"
          content="Тренировки по Бразильскому джиу-джитсу, Грэпплингу, Вольной борьбе, Тайскому боксу, ММА. Единоборства в Минске для детей и взрослых. Бразильское джиу-джитсу и грэпплинг Минск. Тайский бокс Минск. ММА Минск. Вольная борьба Минск"
        />
      </Head>
      <Background page={'home-page'} />
      <Hero home={true} />
      <AboutHome />
      <Classes />
      <SignUp />
      <News news={news} />
      <ApplicationForm />
    </>
  );
}
