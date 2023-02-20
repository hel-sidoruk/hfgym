import { TrainerItem } from './TrainerItem';

const TrainersList = ({ trainers, styles }) => {
  return (
    <div>
      {trainers.map(({ id, image, name, text, disciplines }) => (
        <TrainerItem
          key={id}
          id={id}
          image={image}
          name={name}
          text={text}
          disciplines={disciplines}
          styles={styles}
        />
      ))}
    </div>
  );
};

export default TrainersList;
