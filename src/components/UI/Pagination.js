import styles from './Pagination.module.scss';
import Icon from '../Icons/Icon';
import { Link } from 'react-router-dom';

function Pagination({ postPerPage, totalPosts, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginatePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const paginateNext = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <Link
        to={`/products/page/${currentPage - 1}`}
        onClick={paginatePrevious}
        className={styles.previous}
      >
        <Icon name='arrow' color='gray' direction='left' />
        <p className={styles.previousText}>Previous</p>
      </Link>
      <ul className={styles.pagesDesktop}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.item}>
            <Link
              to={`/products/page/${number}`}
              href='#'
              onClick={() => paginate(number)}
              className={`${styles.link} ${
                currentPage === number ? styles.linkActive : ''
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.pagesMobile}>
        <p>
          Page {currentPage} of {pageNumbers.length}
        </p>
      </div>
      <Link
        to={`/products/page/${currentPage + 1}`}
        onClick={paginateNext}
        className={styles.next}
      >
        <Icon name='arrow' color='gray' direction='right' />
        <p className={styles.nextText}>Next</p>
      </Link>
    </div>
  );
}

export default Pagination;
