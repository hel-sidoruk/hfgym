import GroupItem from '../GroupItem';
import SignLink from '../UI/SignLink';

export const Taekwondo = () => {
  return (
    <>
      <div className="discipline__group discipline__centered">
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
