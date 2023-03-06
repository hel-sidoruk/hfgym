import { useEffect, useState } from 'react';

export const Popup = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => setIsHidden(true);

  useEffect(() => setIsHidden(false), []);

  return (
    <div className={`${isHidden ? 'popup' : 'popup popup--active'}`}>
      <button className="btn btn-fill" onClick={handleClick}>
        Записаться на тренировку
      </button>
    </div>
  );
};
