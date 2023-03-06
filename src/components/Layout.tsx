import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import { Header } from './Header';
import { Preloader } from './UI/Preloader';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const { pathname } = useRouter();
  useEffect(() => {
    setTimeout(() => setShowPreloader(false), 7000);
  }, []);

  useEffect(() => {
    pathname !== '/' && setShowPreloader(false);
  }, [pathname]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {showPreloader && <Preloader />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
