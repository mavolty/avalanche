import styles from './CheckoutTotal.module.scss';
import CheckoutNameSkeleton from '../../components/Checkout/CheckoutNameSkeleton';
import CheckoutQuantitySkeleton from '../../components/Checkout/CheckoutQuantitySkeleton';

function CheckoutTotal({ cart, checkoutToken, isLoading }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.itemText}>Total Product</p>
          <p className={styles.itemAmount}>
            {isLoading && <CheckoutQuantitySkeleton />}
            {!isLoading && cart?.total_items}
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.itemText}>Total Price</p>
          {isLoading && <CheckoutNameSkeleton />}
          {!isLoading && (
            <p className={styles.itemAmount}>
              {checkoutToken?.live?.total.formatted_with_symbol}
            </p>
          )}
        </li>
        <li className={styles.item}>
          <p className={styles.itemText}>Shipping Cost</p>
          {isLoading && <CheckoutNameSkeleton />}
          {!isLoading && (
            <p className={styles.itemAmount}>
              {checkoutToken?.live?.shipping.price.formatted_with_symbol}
            </p>
          )}
        </li>
      </ul>
      <div className={styles.product}>
        <p className={styles.productText}>Total Product</p>
        {isLoading && <CheckoutNameSkeleton />}
        {!isLoading && (
          <p className={styles.productAmount}>
            {checkoutToken?.live?.subtotal.formatted_with_symbol}
          </p>
        )}
      </div>
    </div>
  );
}

export default CheckoutTotal;
