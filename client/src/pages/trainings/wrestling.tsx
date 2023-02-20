import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';
import Wrestling from '../../components/Wrestling';

const WrestlingPage = () => {
  return (
    <>
      <Head>
        <title>Вольная борьба | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренировки по вольной борьбе в зале единоборств Holy Family Gym в Минске"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Вольная борьба">
        <Wrestling />
      </Discipline>
    </>
  );
};

export default WrestlingPage;
