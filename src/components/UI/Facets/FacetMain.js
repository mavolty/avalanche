import styles from './FacetMain.module.scss';

function FacetMain({ children }) {
  return <main className={styles.container}>{children}</main>
}

export default FacetMain;
