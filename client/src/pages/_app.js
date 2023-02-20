import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#1F1A1A" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hfg-nextjs.vercel.app/" />
        <meta
          property="og:title"
          content="Holy Family Gym | Зал единоборств в Минске"
        />
        <meta
          property="og:description"
          content="Тренировки по Бразильскому джиу-джитсу, Грэпплингу, Вольной борьбе, Тайскому боксу, ММА. Единоборства в Минске для детей и взрослых. Бразильское джиу-джитсу и грэпплинг Минск. Тайский бокс Минск. ММА Минск. Вольная борьба Минск"
        />
        <meta property="og:image" content="/big-logo.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/maskable_icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
