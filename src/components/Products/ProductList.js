import styles from './ProductList.module.scss';
import ProductItem from './ProductItem';
import ProductItemSkeleton from './ProductItemSkeleton';
import Empty from '../UI/Empty';

function ProductList({ products, postPerPage = 6, isLoading, empty }) {
  const initialProducts = [];

  for (let i = 0; i < postPerPage; i++) {
    initialProducts.push({
      id: i,
      name: 'Product ' + i,
      image: {
        url: 'https://picsum.photos/200/300',
      },
      price: {
        after: '$' + i * 10,
      },
    });
  }

  if (isLoading && (!products || products.length === 0)) {
    products = initialProducts;
  }

  return (
    <ul className={styles.container}>
      {isLoading &&
        products.map(product => (
          <li key={product.id} className={styles.productItem}>
            <ProductItemSkeleton />
          </li>
        ))}
      {!isLoading && (!products || products.length === 0) && (
        <Empty title={empty.title} text={empty.text} />
      )}
      {!isLoading &&
        products.map(product => (
          <ProductItem
            key={product.id}
            className={styles.productItem}
            {...product}
          />
        ))}
    </ul>
  );
}

export default ProductList;
