import React from 'react';
import Subtitle from '../UI/Subtitle';
import Text from '../UI/Text';

interface Props {
  info: string;
  day: string;
  onClose: () => void;
}

export const FormSuccess = ({ info, day, onClose }: Props) => {
  const trainer = info.match(/\(\D*\)/g);
  const time = info.split(' ')[0];
  const training = info.replace(/\(\D*\)/g, '').replace(/\d+:\d+/g, '');
  if (!trainer) return <></>;
  return (
    <div className="form__success">
      <div className="content">
        <svg
          onClick={onClose}
          className="close"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 1.5L18 19M18.5 1.5L1.5 19" stroke-width="2" />
        </svg>

        <Subtitle>Спасибо за вашу заявку!</Subtitle>
        <div className="info">
          <Text>Вы записаны на тренировку:</Text>
          <Text>
            <b>{training}</b>
          </Text>
          <Text>
            <b>
              {day}, {time}
            </b>
          </Text>
          <Text>
            Тренер: <b>{trainer[0].replace(/[()]/g, '')}</b>
          </Text>
        </div>
        <Text>
          Ecли у вас есть вопросы, вы можете задать их по телефону{' '}
          <a href="tel:+375292765915" className="link">
            {' '}
            +375(29) 276-59-15
          </a>
        </Text>
        <Subtitle>Ждем вас!</Subtitle>
      </div>
    </div>
  );
};
