import styles from './NavbarStatus.module.scss';
import Avatar from '../Avatar';
import Dropdown from '../Dropdown';
import AccountSkeleton from './AccountSkeleton';
import { logout } from '../../../store/auth-action';
import { authActions } from '../../../store/auth-slice';
import { auth } from '../../../services/firebase';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function NavbarStatus({ color }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;

  const logoutHandler = () => {
    dispatch(logout()).then(result => {
      if (result.meta.requestStatus === 'fulfilled')
        dispatch(authActions.setAuthStatus(null));
    });
  };

  const dropdownButton = {
    text: 'Akun saya',
    icon: <Avatar alt='avatar' src={authStatus?.photoURL} />,
  };

  const dropdownAccount = {
    avatar: <Avatar alt='avatar' src={authStatus?.photoURL} />,
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  };

  const dropdownItems = [
    {
      text: 'Pesanan saya',
      element: 'link',
      target: '/checkout',
    },
    {
      text: 'Yang disukai',
      element: 'link',
      target: '/likes',
    },
    {
      text: 'Keluar',
      element: 'button',
      onClick: logoutHandler,
    },
  ];

  return (
    <>
      {authStatus === null && (
        <ul className={`${styles.container} ${styles[color]}`}>
          <li className={styles.item}>
            <Link to='/login' aria-label='Masuk' className={styles.link}>
              Masuk
            </Link>
          </li>
          <li className={styles.item}>
            <Link to='/register' aria-label='Daftar' className={styles.link}>
              Daftar
            </Link>
          </li>
        </ul>
      )}
      {authStatus && (
        <div className={styles.container}>
          <Dropdown
            button={dropdownButton}
            account={dropdownAccount}
            items={dropdownItems}
          />
        </div>
      )}
      {authStatus === undefined && <AccountSkeleton />}
    </>
  );
}

export default NavbarStatus;
