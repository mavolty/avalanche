import styles from './SetNewPassword.module.scss';
import FeaturedIcon from '../../components/Icons/FeaturedIcon';
import Icon from '../../components/Icons/Icon';
import AuthContent from '../../components/Auth/AuthContent';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyPassword } from '../../store/auth-action';
import { confirmMyPasswordReset } from '../../store/update-action';

function SetNewPassword({ actionCode }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(state => state.auth);
  const updateSelector = useSelector(state => state.update);
  const [alertState, setAlertState] = useState(null);
  const {
    isLoading: isVerifyLoading,
    error: verifyError,
    success: verifySuccess,
  } = authSelector.verifyPasswordStatus;
  const {
    isLoading: isConfirmLoading,
    error: confirmError,
    success: confirmSuccess,
  } = updateSelector.confirmPasswordStatus;
  const [isResetValid, setIsResetValid] = useState(false);

  useEffect(() => {
    if (!isConfirmLoading && !confirmError && confirmSuccess) {
      setIsResetValid(true);
    }

    if (!isConfirmLoading && confirmError && !confirmSuccess) {
      setAlertState({
        type: 'error',
        message: confirmError,
      });
    }

    dispatch(verifyPassword({ code: actionCode }));
  }, [isConfirmLoading, confirmError, confirmSuccess, actionCode, dispatch]);

  const submitHandler = event => {
    dispatch(
      confirmMyPasswordReset({
        code: actionCode,
        newPassword: event.confirmPassword,
      })
    );
  };

  const inputs = [
    {
      label: 'Password',
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
    },
    {
      label: 'Konfirmasi Password',
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Konfirmasi Password',
    },
  ];

  const setPasswordHeader = {
    featuredIcon: <FeaturedIcon name='key' color='primary' />,
    title: 'Mengatur Kata Sandi Baru',
    text: 'Kata sandi baru harus berbeda dari kata sandi yang pernah digunakan.',
  };

  const setPasswordBody = {
    alert: alertState,
    inputs: inputs,
    formikForm: {
      onSubmit: submitHandler,
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      validationSchema: Yup.object({
        password: Yup.string()
          .min(6, 'Password minimal 6 karakter')
          .required('Password harus diisi'),
        confirmPassword: Yup.string()
          .oneOf(
            [Yup.ref('password'), null],
            'Konfirmasi password tidak sesuai'
          )
          .required('Konfirmasi password harus diisi'),
      }),
    },
    actionButton: {
      element: 'button',
      theme: 'primary',
      text: 'Mengatur kata sandi baru',
      icon: isConfirmLoading && !confirmError && !confirmSuccess && (
        <Icon name='spinner' color='white' />
      ),
    },
  };

  const setPasswordFooter = {
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

  const successHeader = {
    featuredIcon: <FeaturedIcon name='check-circle' color='success' />,
    title: 'Atur ulang kata sandi',
    text: 'Kata sandi berhasil diubah. Klik tombol dibawah untuk masuk.',
  };

  const successBody = {
    actionButton: {
      element: 'link',
      theme: 'primary',
      text: 'Continue',
      input: {
        to: '/',
      },
    },
  };

  const successFooter = {
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

  return (
    <div className={styles.container}>
      {isVerifyLoading && <p>Loading...</p>}
      {verifySuccess && (
        <AuthContent
          header={setPasswordHeader}
          body={setPasswordBody}
          footer={setPasswordFooter}
        />
      )}
      {isResetValid && (
        <AuthContent
          header={successHeader}
          body={successBody}
          footer={successFooter}
        />
      )}
      {verifyError && !isResetValid && <p>{verifyError}</p>}
    </div>
  );
}

export default SetNewPassword;
