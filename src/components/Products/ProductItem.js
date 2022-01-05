import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';

function ProductItem({
  categories,
  className = '',
  image,
  name,
  permalink,
  price,
}) {
  const classes = `${styles.container} ${className}`;

  return (
    <li className={classes}>
      <Link to={'/products/' + permalink} className={styles.link}>
        <figure className={styles.media}>
          <img src={image.url} alt={name} className={styles.image} />
        </figure>
      </Link>
      <div className={styles.info}>
        {categories &&
          categories.map(category => (
            <Link
              to={'/products/category/' + category.slug}
              className={styles.link}
              key={category.id}
            >
              <h3 className={styles.category}>{category.name}</h3>
            </Link>
          ))}
        <Link to={'/products/' + permalink} className={styles.link}>
          <p className={styles.name}>{name}</p>
        </Link>
        <div className={styles.prices}>
          {/* <span className={styles.priceBefore}>{price.before}</span> */}
          <span className={styles.price}>{price.formatted_with_symbol}</span>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
