import Head from 'next/head';
import Background from '../../components/UI/Background';
import Discipline from '../../components/Discipline';
import ButtonBack from '../../components/UI/ButtonBack';
import { MuaiThai } from '@/components/disciplines';

const ThaiPage = () => {
  return (
    <>
      <Head>
        <title>Тайский бокс | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренировки по тайскому боксу в зале единоборств Holy Family Gym в Минске"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Тайский бокс" centered>
        <MuaiThai />
      </Discipline>
    </>
  );
};

export default ThaiPage;
