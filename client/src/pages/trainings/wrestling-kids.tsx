import WrestlingKids from '@/components/disciplines/WrestlingKids';
import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const WrestlingKidsPage = () => {
  return (
    <>
      <Head>
        <title>Вольная борьба для детей | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Детские тренировки по вольной борьбе в зале единоборств Holy Family Gym в Минске"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Вольная борьба для детей" centered>
        <WrestlingKids />
      </Discipline>
    </>
  );
};

export default WrestlingKidsPage;
