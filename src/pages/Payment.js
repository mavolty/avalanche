import styles from './Payment.module.scss';
import Stepper from '../components/UI/Stepper';
import Cart from './Cart/Cart';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Checkout from './Checkout/Checkout';
import Confirmation from './Confirmation/Confirmation';

const steps = [
  {
    title: 'Cart',
    description: '',
    active: true,
  },
  {
    title: 'Checkout',
    description: '',
    active: false,
  },
  {
    title: 'Confirmation',
    description: '',
    active: false,
  },
];

function Payment() {
  const { pathname } = useLocation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (pathname === '/cart') setStep(0);
    if (pathname === '/checkout') setStep(1);
    if (pathname === '/confirmation') setStep(2);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Cart</h1>
      <Stepper
        steps={steps}
        activeStep={step}
        onStepChange={step => {
          setStep(step);
          if (step === 0) window.location.href = '/cart';
          if (step === 1) window.location.href = '/checkout';
          if (step === 2) window.location.href = '/confirmation';
        }}
      />
      {step === 0 && <Cart />}
      {step === 1 && <Checkout />}
      {step === 2 && <Confirmation />}
    </div>
  );
}

export default Payment;
