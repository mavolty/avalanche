import styles from './FacetHeader.module.scss';

function FacetHeader({ title }) {
  return (
    <header className={styles.container}>
      <legend className={styles.title}>{title}</legend>
    </header>
  );
}

export default FacetHeader;
