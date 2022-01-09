import styles from './Facets.module.scss';
import FacetHeader from './FacetHeader';
import FacetMain from './FacetMain';

function Facets({ title, children }) {
  return (
    <fieldset className={styles.container}>
      <FacetHeader title={title} />
      <FacetMain>{children}</FacetMain>
    </fieldset>
  );
}

export default Facets;
