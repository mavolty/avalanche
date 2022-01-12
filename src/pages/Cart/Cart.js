import styles from './Cart.module.scss';
import CartHeader from '../../components/Cart/CartHeader';
import CartBody from '../../components/Cart/CartBody';
import CartFooter from '../../components/Cart/CartFooter';
import { commerce } from '../../services/commerce';
import { db } from '../../services/firebase';
import { useSelector } from 'react-redux';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useState, useEffect, useCallback } from 'react';

const initialItems = [];

for (let i = 0; i < 10; i++) {
  initialItems.push({
    id: i,
    name: '',
    price: {
      formatted_with_symbol: '',
    },
    image: {
      url: '',
    },
    line_total: '',
  });
}

function Cart() {
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;
  const [cart, setCart] = useState({
    line_items: initialItems,
    total_unique_items: 0,
  });
  const [itemTemp, setItemTemp] = useState({
    id: '',
    quantity: 1,
  });
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    try {
      if (authStatus) {
        const docRef = doc(db, 'cart', authStatus.uid);
        const cart = await getDoc(docRef);

        if (cart.exists()) setCart(cart.data());
        else console.log('No such document!');
      }
    } catch (error) {
      console.error('There was an error fetching the cart', error);
    }
  }, [authStatus]);

  const handleUpdateCartQty = async (id, quantity) => {
    setItemTemp({
      id,
      quantity,
    });

    if (isUpdateLoading) return;
    setIsUpdateLoading(true);

    try {
      const updateRes = await commerce.cart.update(id, { quantity });
      const cart = updateRes.cart;

      const docRef = doc(db, 'cart', authStatus.uid);
      await setDoc(docRef, cart);
      setCart(cart);
    } catch (error) {
      console.log('There is something wrong', error);
    }

    setIsUpdateLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const applyCouponInput = [
    {
      type: 'text',
      id: 'coupon',
      name: 'coupon',
      placeholder: 'Masukkan kode kupon',
    },
  ];

  return (
    <>
      <table className={styles.container}>
        <CartHeader />
        <CartBody
          authStatus={authStatus}
          isLoading={isUpdateLoading}
          cart={cart}
          itemTemp={itemTemp}
          handleQty={handleUpdateCartQty}
        />
      </table>
      <CartFooter cart={cart} formInputs={applyCouponInput} />
    </>
  );
}

export default Cart;
