import styles from './InputCounter.module.scss';
import Icon from './Icons/Icon';
import { useState } from 'react';

function InputCounter({ ...props }) {
  const [quantity, setQuantity] = useState(1);

  const decrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const quantityHandler = event => {
    const value = event.target.value;
    isFinite(value) && setQuantity(+value);
  };

  return (
    <div className={styles.container}>
      <Icon name="minus" color="gray" onClick={decrementHandler} />
      <input
        type="text"
        id="quantity"
        name="quantity"
        step="1"
        value={quantity}
        onChange={quantityHandler}
        {...props}
      />
      <Icon name="add" color="gray" onClick={incrementHandler} />
    </div>
  );
}

export default InputCounter;
