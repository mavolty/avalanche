import styles from './EmailSuccess.module.scss';
import AuthContent from '../../components/Auth/AuthContent';
import FeaturedIcon from '../../components/Icons/FeaturedIcon';
import { auth } from '../../services/firebase';
import { applyActionCode } from '@firebase/auth';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function EmailSuccess({ actionCode }) {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    applyActionCode(auth, actionCode)
      .then(async resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }, [actionCode]);

  const authHeader = {
    featuredIcon: <FeaturedIcon name='check-circle' color='success' />,
    title: 'Email verified',
    text: 'Your password has been successfully reset. Click below to log in magically',
  };

  const authBody = {
    button: {
      element: 'link',
      theme: 'primary',
      size: 'lg',
      text: 'Continue',
      input: {
        to: from,
      },
    },
  };

  return (
    <div className={styles.container}>
      <AuthContent header={authHeader} emailBody={authBody} />
    </div>
  );
}

export default EmailSuccess;
