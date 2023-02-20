import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import SignLink from './UI/SignLink';

const Taekwondo = () => {
  return (
    <>
      <div className={`${styles.group} ${styles.centered}`}>
        <GroupItem
          title={'Детская группа'}
          time={'18:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Тимофей Старовойтов'}
        />
      </div>
      <SignLink />
    </>
  );
};

export default Taekwondo;
