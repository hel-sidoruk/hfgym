import Head from 'next/head';
import { useRef } from 'react';
import AboutHome from '../components/AboutHome';
import Classes from '../components/Classes';
import Hero from '../components/Hero';
import SignUp from '../components/SignUp';
import Background from '../components/UI/Background';
// import News from '../components/News';
import RegistrationForm from '../components/RegistrationForm';

export default function Home() {
  // const signRef = useRef<>();

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
      {/* <SignUp signRef={signRef} /> */}
      {/* <News news={news} /> */}
      {/* <RegistrationForm signRef={signRef} /> */}
    </>
  );
}
