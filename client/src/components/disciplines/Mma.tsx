import GroupItem from '../GroupItem';
import SignLink from '../UI/SignLink';

export const Mma = () => {
  return (
    <>
      <div className="discipline__group discipline__centered">
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
