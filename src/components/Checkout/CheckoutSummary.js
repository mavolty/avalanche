import styles from './CheckoutSummary.module.scss';
import CheckoutCart from './CheckoutCart';
import CheckoutTotal from './CheckoutTotal';

function CheckoutSummary({ cart, checkoutToken, isLoading, initialItems }) {
  return (
    <aside className={styles.container}>
      <CheckoutCart
        cart={cart}
        isLoading={isLoading}
        initialItems={initialItems}
      />
      <CheckoutTotal
        cart={cart}
        checkoutToken={checkoutToken}
        isLoading={isLoading}
      />
    </aside>
  );
}

export default CheckoutSummary;
