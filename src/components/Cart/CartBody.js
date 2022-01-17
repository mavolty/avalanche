import styles from './CartBody.module.scss';
import InputCounter from '../../components/UI/InputCounter';
import CartEmpty from './CartEmpty';
import CartImageSkeleton from '../../components/Cart/CartImageSkeleton';
import CartNameSkeleton from '../../components/Cart/CartNameSkeleton';
import CartPriceSkeleton from '../../components/Cart/CartPriceSkeleton';
import CartQuantitySkeleton from '../../components/Cart/CartQuantitySkeleton';
import CartTotalSkeleton from '../../components/Cart/CartTotalSkeleton';

const initialItems = [];

for (let i = 0; i < 10; i++) {
  initialItems.push({
    id: i,
  });
}

function CartBody({ authStatus, isLoading, cart, itemTemp, handleQty }) {
  return (
    <tbody className={styles.container}>
      {authStatus === undefined &&
        initialItems.map(item => (
          <tr key={item.id} className={styles.products}>
            <td className={styles.productDetail}>
              <CartImageSkeleton className={styles.productImage} />
              <div className={styles.productInfo}>
                <p className={styles.productName}>
                  <CartNameSkeleton />
                </p>
              </div>
            </td>
            <td className={styles.productPrice}>
              <CartPriceSkeleton />
            </td>
            <td className={styles.productQuantity}>
              <CartQuantitySkeleton />
            </td>
            <td className={styles.productTotal}>
              <CartTotalSkeleton />
            </td>
          </tr>
        ))}
      {authStatus &&
        cart?.total_unique_items > 0 &&
        cart?.line_items.map(item => (
          <tr key={item.id} className={styles.products}>
            <td className={styles.productDetail}>
              <img
                className={styles.productImage}
                src={item.image.url}
                alt={item.name}
              />
              <div className={styles.productInfo}>
                <p className={styles.productName}>{item.name}</p>
              </div>
            </td>
            <td className={styles.productPrice}>
              {item.price.formatted_with_symbol}
            </td>
            <td className={styles.productQuantity}>
              <InputCounter
                onMinusClick={() => {
                  if (item.quantity >= 1) handleQty(item.id, item.quantity - 1);
                }}
                onPlusClick={() => handleQty(item.id, item.quantity + 1)}
                onInputChange={event => {
                  handleQty(item.id, event.target.value);
                }}
                value={
                  isLoading && itemTemp.quantity > 0 && itemTemp.id === item.id
                    ? itemTemp.quantity
                    : item.quantity
                }
              />
            </td>
            <td className={styles.productTotal}>
              {item.line_total.formatted_with_symbol}
            </td>
          </tr>
        ))}
      {authStatus && cart?.total_unique_items === 0 && <CartEmpty />}
    </tbody>
  );
}

export default CartBody;
