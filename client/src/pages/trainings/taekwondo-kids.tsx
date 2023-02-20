import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Taekwondo from '../../components/Taekwondo';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const TaekwondoKidsPage = () => {
  return (
    <>
      <Head>
        <title>Таэквондо | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Детские тренировки по таэквондо в зале единоборств Holy Family Gym Минск, ул. Лынькова 19"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Таэквондо" centered>
        <Taekwondo />
      </Discipline>
    </>
  );
};

export default TaekwondoKidsPage;
