import styles from './NavbarBottom.module.scss';
import Icon from '../../Icons/Icon';
import { Link } from 'react-router-dom';

function NavbarBottom() {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <Icon name='home' color='primary' />
      </Link>
      <Link to='/search'>
        <Icon name='search' color='primary' />
      </Link>
      <Link to='/cart'>
        <Icon name='cart' color='primary' />
      </Link>
      <Link to='/wishlist'>
        <Icon name='heart' color='primary' />
      </Link>
      <Link to='/accounts'>
        <Icon name='user' color='primary' />
      </Link>
    </div>
  );
}

export default NavbarBottom;
