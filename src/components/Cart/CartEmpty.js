import styles from './CartEmpty.module.scss';
import Button from '../UI/Button';
import Empty from '../../components/UI/Empty';

function CartEmpty() {
  return (
    <tr className={styles.container}>
      <td className={styles.illustration}>
        <Empty
          title='Keranjang kosong'
          text='Silahkan belanja terlebih dahulu'
        />
      </td>
      <td className={styles.button}>
        <Button
          element='link'
          theme='primary'
          text='Lanjutkan belanja'
          input={{
            to: '/products',
          }}
        />
      </td>
    </tr>
  );
}

export default CartEmpty;
