import { Grappling } from '@/components/disciplines';
import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';
import ImageAnimated from '../../components/UI/ImageAnimated';

const GrapplingPage = () => {
  return (
    <>
      <Head>
        <title>Грэпплинг | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Тренировки по грэпплингу в Минске в зале единоборств Holy Family Gym"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Грэпплинг" centered>
        <Grappling />
      </Discipline>
      <ImageAnimated
        src={'/images/disciplines/grappling1.webp'}
        className="discipline__image discipline__imageLeft discipline__noRadius"
        alt={'Открытый ковер'}
      />
    </>
  );
};

export default GrapplingPage;
