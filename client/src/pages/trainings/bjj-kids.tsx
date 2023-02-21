import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';
import { BjjKids } from '@/components/disciplines/';

const BjjKidsPage = () => {
  return (
    <>
      <Head>
        <title>Бразильское джиу-джитсу для детей | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Детские тренировки по бразильскому джиу-джитсу в зале единоборств Holy Family Gym в Минске"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Бразильское джиу-джитсу для детей">
        <BjjKids />
      </Discipline>
    </>
  );
};

export default BjjKidsPage;
