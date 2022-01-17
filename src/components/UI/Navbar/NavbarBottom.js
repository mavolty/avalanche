import styles from './NavbarBottom.module.scss';
import Icon from '../../Icons/Icon';
import { Link } from 'react-router-dom';

function NavbarBottom() {
  return (
    <div
      className={styles.container}
      role='navigation'
      aria-label='Buttom Navigation'
    >
      <Link to='/' aria-label='Home'>
        <Icon name='home' color='primary' />
      </Link>
      <Link to='/search' aria-label='Search'>
        <Icon name='search' color='primary' />
      </Link>
      <Link to='/cart' aria-label='Cart'>
        <Icon name='cart' color='primary' />
      </Link>
      <Link to='/wishlist' aria-label='Wishlist'>
        <Icon name='heart' color='primary' />
      </Link>
      <Link to='/accounts' aria-label='Account'>
        <Icon name='user' color='primary' />
      </Link>
    </div>
  );
}

export default NavbarBottom;
