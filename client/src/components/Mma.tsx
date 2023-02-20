import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import SignLink from './UI/SignLink';

const Mma = () => {
  return (
    <>
      <div className={`${styles.group} ${styles.centered}`}>
        <GroupItem
          title={'Утренняя группа'}
          time={'18:30'}
          days={'Понедельник, среда, пятница'}
          trainer={'Павел Старицкий'}
          to={'#pavel-staritskiy'}
        />
      </div>
      <SignLink />
    </>
  );
};

export default Mma;
