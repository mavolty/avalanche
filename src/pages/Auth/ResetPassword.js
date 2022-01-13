import styles from './ResetPassword.module.scss';
import FeaturedIcon from '../../components/Icons/FeaturedIcon';
import Icon from '../../components/Icons/Icon';
import AuthContent from '../../components/Auth/AuthContent';
import AuthFooter from '../../components/Auth/AuthFooter';
import { auth } from '../../services/firebase';
import { resetPassword } from '../../store/auth-action';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function ResetPassword() {
  const dispatch = useDispatch();
  const authSelector = useSelector(state => state.auth);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [alertState, setAlertState] = useState(null);
  const { isLoading, error, success } = authSelector.resetPasswordStatus;

  useEffect(() => {
    if (!isLoading && !error && success) {
      setIsEmailValid(true);
    }

    if (!isLoading && error && !success) {
      setAlertState({
        type: 'error',
        message: error,
      });
    }
  }, [isLoading, error, success]);

  const forgotSubmitHandler = event => {
    event.preventDefault();
    dispatch(resetPassword({ email: event.target[0].value }));
  };

  const inputs = [
    {
      label: 'Email',
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      autoComplete: 'email',
    },
  ];

  const forgotPasswordHeader = {
    featuredIcon: <FeaturedIcon name='key' color='primary' />,
    title: 'Lupa kata sandi?',
    text: 'Tenang saja, kami akan mengirimkan link untuk mengatur ulang kata sandi Anda.',
  };

  const forgotPasswordBody = {
    alert: alertState,
    inputs: inputs,
    formInputs: inputs,
    defaultForm: {
      onSubmit: forgotSubmitHandler,
    },
    actionButton: {
      element: 'button',
      theme: 'primary',
      text: 'Atur ulang kata sandi',
      icon: isLoading && !error && !success && (
        <Icon name='spinner' color='white' />
      ),
    },
  };

  const forgotPasswordFooter = {
    icon: <Icon name='arrow' color='gray' direction='left' />,
    button: {
      element: 'link',
      theme: 'gray',
      text: 'Kembali ke halaman login',
      input: {
        to: '/login',
      },
    },
  };

  const checkEmailHeader = {
    featuredIcon: <FeaturedIcon name='envelope' color='primary' />,
    title: 'Cek Email Anda',
    text: `Kami telah mengirimkan link ke ${auth.currentUser?.email}`,
  };

  // const checkEmailBody = {
  //   actionButton: {
  //     element: 'button',
  //     theme: 'primary',
  //     text: 'Open email app',
  //     icon: isLoading && !error && !success && (
  //       <Icon name='spinner' color='white' />
  //     ),
  //   },
  // };

  const checkEmailFooter = {
    text: 'Tidak menerima email?',
    button: {
      element: 'link',
      theme: 'color',
      text: 'Mengirim ulang email',
      input: {
        to: '#',
        style: {
          fontSize: '0.8rem',
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      {!isEmailValid && (
        <AuthContent
          header={forgotPasswordHeader}
          body={forgotPasswordBody}
          footer={forgotPasswordFooter}
        />
      )}

      {isEmailValid && (
        <>
          <AuthContent
            header={checkEmailHeader}
            // body={checkEmailBody}
            footer={checkEmailFooter}
          />
          <AuthFooter
            icon={<Icon name='arrow' direction='left' color='gray' />}
            button={{
              element: 'link',
              theme: 'gray',
              text: 'Kembali ke Login',
              input: {
                to: '/login',
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default ResetPassword;
