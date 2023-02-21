import Text from './UI/Text';
import Title from './UI/Title';
import Subtitle from './UI/Subtitle';
import ImageAnimated from './UI/ImageAnimated';
import { TrainerInterface } from '@/types';

export const TrainerItem = ({ trainer }: { trainer: TrainerInterface }) => {
  const textArray = trainer.text.replace(/\r/g, '').split('\n').filter(Boolean);
  const names: { [key: number]: string } = {
    1: 'viktor-nikonov',
    2: 'evgeniy-rutko',
    3: 'pavel-staritskiy',
    4: 'evgeniy-aleshkevich',
    5: 'nikita-sachno',
    6: 'evgeniy-akulich',
  };
  return (
    <div className="trainers__item">
      <ImageAnimated
        wrapClass="trainers__wrapper"
        className="trainers__image"
        src={`/images/trainers/${trainer.image.replace('.jpg', '.webp')}`}
        alt="trainer photo"
      />
      <div className="trainers__info">
        <Title variant="trainers__title">{trainer.name}</Title>
        <Subtitle variant="trainers__disciplines">{trainer.disciplines}</Subtitle>
        <div className="trainers__textBlock">
          {textArray.map((elem, i) => (
            <Text variant="trainers__text" key={i}>
              {elem}
            </Text>
          ))}
        </div>
      </div>
      <span aria-hidden={true} id={names[trainer.id]} className="trainers__hidden"></span>
    </div>
  );
};
