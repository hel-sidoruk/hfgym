import { Bjj } from '@/components/disciplines';
import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const BjjPage = () => {
  return (
    <>
      <Head>
        <title>Бразильское джиу-джитсу | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренировки по Бразильскому джиу-джитсу в Минске в Holy Family Gym. Утренние и вечерние группы, группа для начинающих"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Бразильское джиу-джитсу">
        <Bjj />
      </Discipline>
    </>
  );
};

export default BjjPage;
