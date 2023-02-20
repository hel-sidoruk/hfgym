import { paginationFunction } from '../../utils/pages';
import styles from '../../styles/pagination.module.scss';

export const Pagination = ({ pagesArray, page, changePage }) => {
  const handleClick = (e) => {
    changePage(e.target.innerText);
    window.scrollTo(0, 0);
  };

  const paginationBtns = paginationFunction(pagesArray, page);
  const lastPage = pagesArray[pagesArray.length - 1];
  return (
    <div className={styles.pagination}>
      {paginationBtns.map((el) => (
        <button
          onClick={handleClick}
          key={el}
          className={`btn ${styles.btn} ${page == el ? styles.current : ''}`}
        >
          {el}
        </button>
      ))}
      <span className={`${styles.dots} ${page > 3 ? styles.active : ''}`}>
        ...
      </span>
      <span
        className={`${styles.dots} ${page < lastPage - 2 ? styles.active : ''}`}
      >
        ...
      </span>
    </div>
  );
};

export default Pagination;
