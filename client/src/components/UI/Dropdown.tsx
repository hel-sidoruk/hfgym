interface Props {
  values: string[];
  initialText: string;
  state: string;
  setState: (s: string) => void;
  onClick: () => void;
  active: boolean;
  error: string;
  setActive: (b: boolean) => void;
}

const Dropdown = ({
  values,
  initialText,
  state,
  setState,
  active,
  setActive,
  onClick,
  error,
}: Props) => {
  const handleClick = (value: string) => {
    setState(value);
    setActive(false);
  };

  return (
    <div
      onClick={onClick}
      className={`dropdown ${!values.length ? 'disabled' : ''} ${error ? 'error' : ''}`}
    >
      {state ? '' : <span>{initialText}</span>}
      <div
        onClick={() => (active ? setActive(false) : setActive(true))}
        className={`dropdown__top ${active ? 'dropdown__topActive' : ''}`}
      >
        {state}
      </div>
      <ul className={`dropdown__list ${active ? 'dropdown__listActive' : ''}`}>
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
