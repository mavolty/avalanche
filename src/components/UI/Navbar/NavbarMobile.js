import styles from './NavbarMobile.module.scss';
import Button from '../Button';
import Icon from '../../Icons/Icon';
import Avatar from '../Avatar';
import AccountSkeleton from './AccountSkeleton';
import { authActions } from '../../../store/auth-slice';
import { logout } from '../../../store/auth-action';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const activityList = [
  {
    text: 'Pesanan saya',
    icon: 'cart',
    link: '/checkout',
  },
  {
    text: 'Wishlist',
    icon: 'heart',
    link: '/wishlist',
  },
  {
    text: 'Akun saya',
    icon: 'user',
    link: '/accounts',
  },
];

const categoryList = [
  {
    text: 'Face',
    link: '/category/face',
  },
  {
    text: 'Body',
    link: '/category/body',
  },
  {
    text: 'Hair',
    link: '/category/hair',
  },
  {
    text: 'Makeup',
    link: '/category/makeup',
  },
  {
    text: 'Skin',
    link: '/category/skin',
  },
];

function NavbarMobile({ color, cart }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClasses = `${isMenuOpen ? styles.menuOpen : ''}`;

  const hamburgerHandler = () => {
    setIsMenuOpen(state => !state);
  };

  const logoutHandler = () => {
    dispatch(logout()).then(result => {
      if (result.meta.requestStatus === 'fulfilled')
        dispatch(authActions.setAuthStatus(null));
    });
  };

  return (
    <>
      <nav className={`${styles.container} ${styles[color]}`}>
        <div className={`${styles.hamburger} ${menuClasses}`}>
          <Icon
            name='hamburger'
            color={color === 'black' ? 'black' : 'white'}
            onClick={hamburgerHandler}
          />
        </div>
        <div className={`${styles.close} ${menuClasses}`}>
          <Icon name='close' color='black' onClick={hamburgerHandler} />
        </div>
        <h1 className={`${styles.brand} ${styles[color]}`}>Avalanche</h1>
        <div className={styles.cart}>
          <Link to='/cart' className={styles.link}>
            <Icon name='cart' color={color} />
            <p className={`${styles.amount} ${styles[color]}`}>
              ({cart?.total_items || 0})
            </p>
          </Link>
        </div>
      </nav>
      <div className={`${styles.menu} ${menuClasses}`}>
        <div className={styles.account}>
          {authStatus === null && (
            <>
              <Button
                element='link'
                theme='primary'
                text='Masuk'
                input={{
                  to: '/login',
                }}
              />
              <Button
                element='link'
                theme='primary'
                text='Daftar'
                input={{
                  to: '/register',
                }}
              />
            </>
          )}
          {authStatus && (
            <>
              <Avatar alt='avatar' src={authStatus?.photoURL} size='lg' />
              <div className={styles.accountInfo}>
                <p className={styles.accountName}>{authStatus?.displayName}</p>
                <p className={styles.accountEmail}>{authStatus?.email}</p>
              </div>
            </>
          )}
          {authStatus === undefined && <AccountSkeleton />}
        </div>
        <div className={styles.activity}>
          <h4 className={styles.activityTitle}>Aktivitas Saya</h4>
          <div className={styles.activityList}>
            {activityList.map(act => (
              <Button
                key={act.text}
                element='link'
                theme='black'
                text={act.text}
                input={{
                  to: act.link,
                }}
                icon={<Icon name={act.icon} color='primary' />}
              />
            ))}
          </div>
        </div>
        <div className={styles.category}>
          <h4 className={styles.categoryTitle}>Semua kategori</h4>
          <div className={styles.categoryList}>
            {categoryList.map(cat => (
              <Button
                key={cat.text}
                element='link'
                theme='black'
                text={cat.text}
                input={{
                  to: cat.link,
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.logout}>
          <Icon name='exit' color='primary' />
          <button className={styles.logoutButton} onClick={logoutHandler}>
            Keluar
          </button>
        </div>
      </div>
    </>
  );
}

export default NavbarMobile;
