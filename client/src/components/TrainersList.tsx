import { TrainerInterface } from '@/types';
import { TrainerItem } from './TrainerItem';

const TrainersList = ({
  trainers,
  styles,
}: {
  trainers: TrainerInterface[];
  styles: { [key: string]: string };
}) => {
  return (
    <div>
      {trainers.map((trainer) => (
        <TrainerItem key={trainer.id} trainer={trainer} styles={styles} />
      ))}
    </div>
  );
};

export default TrainersList;
