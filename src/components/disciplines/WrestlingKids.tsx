import GroupItem from '../GroupItem';
import SignLink from '../UI/SignLink';

export const WrestlingKids = () => {
  return (
    <>
      <div className="discipline__group discipline__centered">
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
