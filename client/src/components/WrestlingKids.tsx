import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import SignLink from './UI/SignLink';

const WrestlingKids = () => {
  return (
    <>
      <div className={`${styles.group} ${styles.centered}`}>
        <GroupItem
          title={'Детская группа'}
          time={'18:30'}
          days={'Вторник, четверг'}
          trainer={'Евгений Алешкевич'}
          to={'#evgeniy-aleshkevich'}
        />
      </div>
      <SignLink />
    </>
  );
};

export default WrestlingKids;
