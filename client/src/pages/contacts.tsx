import Head from 'next/head';
import { useRef } from 'react';
// import RegistrationForm from '../components/RegistrationForm';
import Background from '../components/UI/Background';
import MapBlock from '../components/UI/MapBlock';
import Section from '../components/UI/Section';
import Subtitle from '../components/UI/Subtitle';
import Text from '../components/UI/Text';
import Title from '../components/UI/Title';
import styles from '../styles/contacts.module.scss';

export default function ContactsPage() {
  const mapRef = useRef<HTMLSpanElement>(null);
  const handleClick = () => {
    window.scrollTo({
      top: mapRef.current?.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Head>
        <title>Контакты | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Контактная информация зала Holy Family Gym. Записаться на тренировку в Holy Family Gym"
        />
      </Head>
      <Background page={'contacts-page'} />
      <Section sectionName={styles.contacts}>
        <Title>Контакты</Title>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Мы находимся по адресу:</Subtitle>
          <p onClick={handleClick} className={`${styles.text} text`}>
            г. Минск, ул. Михася Лынькова 19/1, вход со двора
          </p>
        </div>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Телефон:</Subtitle>
          <Text variant={styles.text}>
            <a href="tel:+375292765915">+375(29) 276-59-15</a>
          </Text>
        </div>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Время работы:</Subtitle>
          <Text variant={styles.text}>Ежедневно с 7:00 до 23:00</Text>
          <Text variant={styles.text}>
            Групповые и индивидуальные тренировки для взрослых и детей.
          </Text>
        </div>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Наши социальные сети:</Subtitle>
          <a
            className={`${styles.link} ${styles.vk}`}
            target="_blank"
            href="https://vk.com/bjj_holyfamilygym"
            rel="noreferrer"
          >
            Вконтакте
          </a>
          <a
            className={`${styles.link} ${styles.insta}`}
            target="_blank"
            href="https://www.instagram.com/holyfamilygym/"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className={`${styles.link} ${styles.fb}`}
            target="_blank"
            href="https://facebook.com/HolyFamilyGym/"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className={styles.block}>
          <Text variant={styles.textBig}>Мы выдаем всю необходимую экипировку для занятий</Text>
        </div>
      </Section>
      <span className={styles.hidden} id="form" aria-hidden="true"></span>
      {/* <RegistrationForm /> */}
      <span className={styles.hidden} ref={mapRef} aria-hidden={true}></span>
      <MapBlock mapWidth={'100%'} mapHeight={'400px'} />
    </>
  );
}
