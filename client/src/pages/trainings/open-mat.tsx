import { OpenMat } from '@/components/disciplines';
import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';
import ImageAnimated from '../../components/UI/ImageAnimated';

const OpenMatPage = () => {
  return (
    <>
      <Head>
        <title>Открытый ковер по грэпплингу в Holy Family Gym</title>
        <meta
          name="description"
          content="Бесплатный открытый ковер по грэпплингу по субботам в зале единоборств Holy Family Gym Минск"
        />
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Открытый ковер">
        <OpenMat />
      </Discipline>
      <ImageAnimated
        src={'/images/disciplines/grappling6.webp'}
        className="discipline__image discipline__imageLeft discipline__noRadius"
        alt={'Открытый ковер'}
      />
    </>
  );
};

export default OpenMatPage;
