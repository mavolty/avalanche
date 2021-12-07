import styles from './Pagination.module.scss';
import Icon from './Icons/Icon';

function Pagination({ postPerPage, totalPosts, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <a href="#" className={styles.previous}>
        <Icon name="arrow" color="gray" direction="left" />
        <p className={styles.previousText}>Previous</p>
      </a>
      <ul className={styles.pagesDesktop}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.item}>
            <a
              href="#"
              onClick={() => paginate(number)}
              className={styles.link}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.pagesMobile}>
        <p>
          Page {currentPage} of {pageNumbers.length}
        </p>
      </div>
      <a href="#" className={styles.next}>
        <Icon name="arrow" color="gray" direction="right" />
        <p className={styles.nextText}>Next</p>
      </a>
    </div>
  );
}

export default Pagination;
