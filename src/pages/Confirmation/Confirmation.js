import styles from './Confirmation.module.scss';
import AuthHeader from '../../components/Auth/AuthHeader';
import AuthBody from '../../components/Auth/AuthBody';
import FeaturedIcon from '../../components/Icons/FeaturedIcon';
import axios from 'axios';
import { db } from '../../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { commerce } from '../../services/commerce';
import { useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';

function Confirmation() {
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;

  const fetchData = useCallback(async () => {
    try {
      if (authStatus) {
        const cartRef = doc(db, 'cart', authStatus.uid);
        const cart = await getDoc(cartRef);
        if (cart.exists()) {
          const token = await commerce.checkout.generateToken(cart.data().id, {
            type: 'cart',
          });

          const options = {
            url: '/api/confirmation',
            method: 'get',
            params: {
              order_id: token.id,
            },
          };

          axios(options).then(response => {
            if (response.data.status_code === 200) {
              setDoc(cartRef, {});
              commerce.cart.empty().then(response => console.log(response));
            }
          });
        }
      }
    } catch (error) {
      console.error('There was an error fetching data', error);
    }
  }, [authStatus]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const confirmHeader = {
    featuredIcon: <FeaturedIcon name='check-circle' color='success' />,
    title: 'Pembayanan Berhasil',
    text: 'Terima kasih telah berbelanja di kami',
  };

  const confirmBody = {
    button: {
      element: 'link',
      theme: 'primary',
      size: 'lg',
      text: 'Lanjutkan',
      input: {
        to: '/',
      },
    },
  };

  return (
    <div className={styles.container}>
      <AuthHeader {...confirmHeader} />
      <AuthBody {...confirmBody} />
    </div>
  );
}

export default Confirmation;
