import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';
import { db } from '../../../services/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

function Navbar({ color }) {
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;
  const [cart, setCart] = useState([]);

  const fetchCart = useCallback(async () => {
    try {
      if (authStatus) {
        const docRef = doc(db, 'cart', authStatus.uid);
        onSnapshot(docRef, doc => {
          if (doc.exists()) {
            setCart(doc.data());
          } else {
            console.log('Cart is empty');
          }
        });
      }
    } catch (error) {
      console.log('There was an error fetching the cart', error);
    }
  }, [authStatus]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <header>
      <NavbarDesktop color={color} cart={cart} />
      <NavbarMobile color={color} cart={cart} />
    </header>
  );
}

export default Navbar;
