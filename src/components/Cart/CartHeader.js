import styles from './CartHeader.module.scss';

function CartHeader() {
  return (
    <thead className={styles.container}>
      <tr className={styles.header}>
        <th className={styles.products}>Produk</th>
        <th className={styles.price}>Harga</th>
        <th className={styles.quantity}>Jumlah</th>
        <th className={styles.total}>Total</th>
      </tr>
    </thead>
  );
}

export default CartHeader;
