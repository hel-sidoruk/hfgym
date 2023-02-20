import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Mma from '../../components/Mma';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const MmaPage = () => {
  return (
    <>
      <Head>
        <title>MMA | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренировки по смешанным единоборствам (ММА) в зале единоборст Holy Family Gym Минск"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="MMA" centered>
        <Mma />
      </Discipline>
    </>
  );
};

export default MmaPage;
