import styles from './CheckoutCart.module.scss';
import Empty from '../../components/UI/Empty';
import CheckoutImageSkeleton from '../../components/Checkout/CheckoutImageSkeleton';
import CheckoutNameSkeleton from '../../components/Checkout/CheckoutNameSkeleton';
import CheckoutQuantitySkeleton from '../../components/Checkout/CheckoutQuantitySkeleton';

function CheckoutCart({ cart, isLoading, initialItems }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Checkout</h2>
      <ul className={styles.products}>
        {isLoading &&
          initialItems.map(product => (
            <li key={product.id} className={styles.product}>
              <figure className={styles.productMedia}>
                <CheckoutImageSkeleton />
              </figure>
              <div className={styles.productInfo}>
                <CheckoutNameSkeleton />
                <CheckoutQuantitySkeleton />
              </div>
            </li>
          ))}
        {!isLoading &&
          cart?.line_items.length > 0 &&
          cart?.line_items.map(product => (
            <li key={product.id} className={styles.product}>
              <figure className={styles.productMedia}>
                <img
                  className={styles.productImage}
                  src={product.image.url}
                  alt={product.name}
                />
              </figure>
              <div className={styles.productInfo}>
                <p className={styles.productName}>{product.name}</p>
                <pre className={styles.productQuantity}>
                  x{product.quantity}
                </pre>
              </div>
            </li>
          ))}
        {!isLoading && cart?.line_items.length === 0 && (
          <li>
            <Empty
              title='Keranjang kosong'
              text='Belum ada produk yang ditambahkan ke keranjang'
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default CheckoutCart;
