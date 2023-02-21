import styles from '../../styles/dropdown.module.scss';

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
      className={`${styles.dropdown} ${!values.length ? styles.disabled : ''} ${
        error ? styles.error : ''
      }`}
    >
      {state ? '' : <span>{initialText}</span>}
      <div
        onClick={() => (active ? setActive(false) : setActive(true))}
        className={`${styles.top} ${active ? styles.topActive : ''}`}
      >
        {state}
      </div>
      <ul className={`${styles.list} ${active ? styles.listActive : ''}`}>
        {values.map((el) => (
          <li key={el} className={styles.item} onClick={() => handleClick(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
