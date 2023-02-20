import styles from '../../styles/burger.module.scss';

const Burger = ({ active, openMenu }) => {
  return (
    <div className={styles.burger} onClick={openMenu}>
      <span className={`${styles.line} ${active ? styles.lineActive : ''}`}></span>
      <span className={`${styles.line} ${active ? styles.lineActive : ''}`}></span>
      <span className={`${styles.line} ${active ? styles.lineActive : ''}`}></span>
    </div>
  );
};

export default Burger;
