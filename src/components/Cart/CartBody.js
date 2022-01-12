import styles from './CartBody.module.scss';
import InputCounter from '../../components/UI/InputCounter';
import CartEmpty from './CartEmpty';
import CartImageSkeleton from '../../components/Cart/CartImageSkeleton';
import CartNameSkeleton from '../../components/Cart/CartNameSkeleton';
import CartPriceSkeleton from '../../components/Cart/CartPriceSkeleton';
import CartQuantitySkeleton from '../../components/Cart/CartQuantitySkeleton';
import CartTotalSkeleton from '../../components/Cart/CartTotalSkeleton';

function CartBody({ authStatus, isLoading, cart, itemTemp, handleQty }) {
  return (
    <tbody className={styles.container}>
      {authStatus && cart.total_unique_items === 0 && <CartEmpty />}
      {cart.total_unique_items > 0 &&
        cart.line_items.map(item => (
          <tr key={item.id} className={styles.products}>
            <td className={styles.productDetail}>
              {authStatus && (
                <img
                  className={styles.productImage}
                  src={item.image.url}
                  alt={item.name}
                />
              )}
              {authStatus === undefined && (
                <CartImageSkeleton className={styles.productImage} />
              )}
              <div className={styles.productInfo}>
                <p className={styles.productName}>
                  {authStatus && item.name}
                  {authStatus === undefined && <CartNameSkeleton />}
                </p>
              </div>
            </td>
            <td className={styles.productPrice}>
              {authStatus && item.price.formatted_with_symbol}
              {authStatus === undefined && <CartPriceSkeleton />}
            </td>
            <td className={styles.productQuantity}>
              {authStatus && (
                <InputCounter
                  onMinusClick={() => {
                    if (item.quantity >= 1)
                      handleQty(item.id, item.quantity - 1);
                  }}
                  onPlusClick={() => handleQty(item.id, item.quantity + 1)}
                  onInputChange={event => {
                    handleQty(item.id, event.target.value);
                  }}
                  value={
                    isLoading &&
                    itemTemp.quantity > 0 &&
                    itemTemp.id === item.id
                      ? itemTemp.quantity
                      : item.quantity
                  }
                />
              )}
              {authStatus === undefined && <CartQuantitySkeleton />}
            </td>
            <td className={styles.productTotal}>
              {authStatus && item.line_total.formatted_with_symbol}
              {authStatus === undefined && <CartTotalSkeleton />}
            </td>
          </tr>
        ))}
    </tbody>
  );
}

export default CartBody;
