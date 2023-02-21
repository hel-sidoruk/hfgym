import { useEffect } from 'react';

interface Props {
  values: string[];
  text: string;
  state: string;
  setState: (s: string) => void;
  onClick: () => void;
  active: boolean;
  error: string;
  setActive: (b: boolean) => void;
}

const Dropdown = ({ values, text, state, setState, active, setActive, onClick, error }: Props) => {
  const handleClick = (value: string) => {
    setState(value);
  };
  const toggleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
    setActive(!active);
  };

  useEffect(() => {
    const close = () => setActive(false);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div
      onClick={toggleActive}
      className={`dropdown ${!values.length ? 'disabled' : ''} ${error ? 'error' : ''}`}
    >
      {state ? '' : <span>{text}</span>}
      <div className={`dropdown__top ${active ? 'dropdown__active' : ''}`}>{state}</div>
      <ul className="dropdown__list">
        {values.map((el) => (
          <li key={el} className="dropdown__item" onClick={() => handleClick(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
