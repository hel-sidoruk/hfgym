import Head from 'next/head';
import { useEffect, useState } from 'react';
import AboutHome from '../components/AboutHome';
import Classes from '../components/Classes';
import Hero from '../components/Hero';
import SignUp from '../components/SignUp';
import News from '../components/News';
import axios from 'axios';
import { ApplicationForm } from '@/components/ApplicationForm';
import { Preloader } from '@/components/UI/Preloader';
// import { Popup } from '@/components/UI/Popup';

export default function Home() {
  const [news, setNews] = useState([]);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowPreloader(false), 7000);
  }, []);

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
      {showPreloader && <Preloader />}
      <Hero home={true} />
      <AboutHome />
      <Classes />
      <SignUp />
      <News news={news} />
      <ApplicationForm />
      {/* <Popup /> */}
    </>
  );
}
