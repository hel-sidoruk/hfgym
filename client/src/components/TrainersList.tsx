import { TrainerInterface } from '@/types';
import { TrainerItem } from './TrainerItem';

const TrainersList = ({ trainers }: { trainers: TrainerInterface[] }) => {
  return (
    <div>
      {trainers.map((trainer) => (
        <TrainerItem key={trainer.id} trainer={trainer} />
      ))}
    </div>
  );
};

export default TrainersList;
