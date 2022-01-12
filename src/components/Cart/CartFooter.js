import styles from './CartFooter.module.scss';
import Button from '../../components/UI/Button';
import Form from '../../components/UI/Form';

function CartFooter({ cart, formInputs }) {
  return (
    <div className={styles.container}>
      <Form inputs={formInputs} onSubmit={e => console.log(e)}>
        <Button
          element='button'
          theme='secondary-color'
          size='lg'
          text='Gunakan kupon'
          input={{ type: 'submit' }}
        />
      </Form>
      <div className={styles.action}>
        <div className={styles.total}>
          <pre className={styles.totalText}>Total Harga</pre>
          <p className={styles.totalCart}>
            {cart?.subtotal?.formatted_with_symbol || 0}
          </p>
        </div>
        {cart.total_unique_items > 0 && (
          <Button
            element='link'
            theme='primary'
            size='xl'
            text='Bayar Sekarang'
            input={{
              to: '/checkout',
            }}
          />
        )}
        {cart.total_unique_items === 0 && (
          <Button
            element='button'
            theme='primary'
            size='xl'
            text='Bayar Sekarang'
            input={{
              disabled: true,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CartFooter;
