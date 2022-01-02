import styles from './NavbarDesktop.module.scss';
import Icon from '../../Icons/Icon';
import NavbarStatus from './NavbarStatus';
import { Link } from 'react-router-dom';

function NavbarDesktop({ color, cart }) {
  return (
    <nav className={`${styles.container} ${styles[color]}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/' className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to='/about-us' className={styles.link}>
            About Us
          </Link>
        </li>
        <li className={styles.item}>
          <Link to='/products' className={styles.link}>
            Shop
          </Link>
        </li>
      </ul>
      <h1 className={styles.brand}>Avalanche</h1>
      <div className={styles.account}>
        <NavbarStatus color={color} />
        <div className={styles.cart}>
          <Link to='/cart' className={styles.link}>
            <Icon name='cart' color={color} />
            <p className={`${styles.amount} ${styles[color]}`}>
              ({cart?.total_items || 0})
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDesktop;
