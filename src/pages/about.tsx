import Head from 'next/head';
import AboutContent from '../components/AboutContent';
import Hero from '../components/Hero';
import Background from '../components/UI/Background';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>О клубе | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренировки по Бразильскому джиу-джитсу, Грэпплингу, Вольной борьбе, Тайскому боксу, ММА. Единоборства в Минске для детей и взрослых. Бразильское джиу-джитсу и грэпплинг Минск. Тайский бокс Минск. ММА Минск. Вольная борьба Минск"
        />
      </Head>
      <Background page={'about-page'} />
      <Hero />
      <AboutContent />
    </>
  );
}
