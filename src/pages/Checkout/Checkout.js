import axios from 'axios';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import CheckoutSummary from '../../components/Checkout/CheckoutSummary';
import { commerce } from '../../services/commerce';
import { db } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';

const initialItems = [];

for (let i = 0; i < 4; i++) {
  initialItems.push({
    id: i,
  });
}

const formInputs = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'Nama Depan',
    placeholder: 'Masukkan nama depan',
    type: 'text',
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Nama Belakang',
    placeholder: 'Masukkan nama belakang',
    type: 'text',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Masukkan alamat email',
    type: 'email',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Nomor Telepon',
    placeholder: 'Masukkan nomor telepon',
    type: 'text',
  },
  {
    id: 'address',
    name: 'address',
    label: 'Alamat',
    placeholder: 'Masukkan alamat lengkap',
    type: 'text',
  },
  {
    id: 'city',
    name: 'city',
    label: 'Kota',
    placeholder: 'Masukkan kota',
    type: 'text',
  },
  {
    id: 'postalCode',
    name: 'postalCode',
    label: 'Kode Pos',
    placeholder: 'Masukkan kode pos',
    type: 'text',
  },
];

function Checkout() {
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutToken, setCheckoutToken] = useState(null);

  const checkoutPopUp = useCallback(() => {
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute('data-client-key', myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      if (authStatus) {
        const cartRef = doc(db, 'cart', authStatus.uid);
        const cart = await getDoc(cartRef);

        if (cart.exists()) {
          const token = await commerce.checkout.generateToken(cart.data().id, {
            type: 'cart',
          });

          setCheckoutToken(token);
          setCart(cart.data());
        } else {
          console.log('No such document!');
          setCart({ line_items: [] });
        }
      }
    } catch (error) {
      console.error('There was an error fetching data', error);
    }
    setIsLoading(false);
  }, [authStatus]);

  useEffect(() => {
    checkoutPopUp();
    fetchData();
  }, [fetchData, checkoutPopUp]);

  const submitHandler = async event => {
    const parameter = {
      order_id: checkoutToken.id,
      gross_amount: checkoutToken.live.total.raw,
      item_details: checkoutToken.live.line_items.map(item => ({
        id: item.id,
        price: item.price.raw,
        quantity: item.quantity,
        name: item.name,
      })),
      first_name: event.firstName,
      last_name: event.lastName,
      email: event.email,
      phone: event.phone,
      address: event.address,
      city: event.city,
      postal_code: event.postalCode,
    };

    const options = {
      url: 'http://localhost:8000/checkout',
      method: 'get',
      params: parameter,
    };

    axios(options).then(response => {
      window.snap.pay(response.data);
    });
  };

  return (
    <>
      <CheckoutForm formInputs={formInputs} submitHandler={submitHandler} />
      <CheckoutSummary
        cart={cart}
        checkoutToken={checkoutToken}
        isLoading={isLoading}
        initialItems={initialItems}
      />
    </>
  );
}

export default Checkout;
