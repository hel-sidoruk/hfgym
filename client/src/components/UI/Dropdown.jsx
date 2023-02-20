import styles from '../../styles/dropdown.module.scss';

const Dropdown = ({
  values,
  state,
  setState,
  initialText,
  active,
  setActive,
  onClick,
  error,
}) => {
  const handleClick = (e) => {
    setState(e.target.innerText);
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
        {values.length
          ? values.map((el) => (
              <li key={el} className={styles.item} onClick={handleClick}>
                {el}
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};

export default Dropdown;
