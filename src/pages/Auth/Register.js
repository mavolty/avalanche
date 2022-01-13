import styles from './Register.module.scss';
import * as Yup from 'yup';
import AuthContent from '../../components/Auth/AuthContent';
import Icon from '../../components/Icons/Icon';
import { register, authWithGoogle } from '../../store/auth-action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authSelector = useSelector(state => state.auth);
  const [alertState, setAlertState] = useState(null);
  const { isLoading, error, success } = authSelector.registerStatus;

  useEffect(() => {
    if (!isLoading && error && !success) {
      setAlertState({
        type: 'error',
        message: error,
      });
    }

    if (!isLoading && !error && !success) {
      setAlertState(null);
    }
  }, [isLoading, error, success, navigate]);

  const uid = '_' + Math.random().toString(36).substr(2, 9);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const photoURL = `https://avatars.dicebear.com/api/micah/${uid}.svg?background=%23${randomColor}`;

  const submitHandler = event => {
    dispatch(
      register({
        email: event.email,
        password: event.password,
        firstName: event.firstName,
        lastName: event.lastName,
        displayName: `${event.firstName} ${event.lastName}`.trim(),
        photoURL,
      })
    ).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/email/verify', { replace: true });
      }
    });
  };

  const googleHandler = async () => {
    dispatch(authWithGoogle({ photoURL })).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/', { replace: true });
      }
    });
  };

  const formInputs = [
    {
      label: 'Nama Depan',
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      placeholder: 'Masukkan nama depan',
      autoComplete: 'off',
    },
    {
      label: 'Nama Belakang',
      id: 'lastName',
      name: 'lastName',
      type: 'text',
      placeholder: 'Masukkan nama belakang',
      autoComplete: 'off',
    },
    {
      label: 'Email',
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Masukkan email',
      autoComplete: 'off',
      noValidate: true,
    },
    {
      label: 'Kata Sandi',
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Masukkan kata sandi',
      autoComplete: 'off',
    },
  ];

  const authHeader = {
    title: 'Daftar',
    text: 'Daftar untuk mengakses akun',
  };

  const authBody = {
    alert: alertState,
    inputs: formInputs,
    formikForm: {
      onSubmit: submitHandler,
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required('Nama depan harus diisi'),
        lastName: Yup.string().notRequired(),
        email: Yup.string()
          .email('Alamat email tidak valid')
          .required('Alamat email harus diisi'),
        password: Yup.string()
          .min(6, 'Kata sandi minimal 6 karakter')
          .required('Kata sandi harus diisi'),
      }),
    },
    actionButton: {
      text: 'Daftar',
      input: { type: 'submit' },
      icon: isLoading && !error && !success && (
        <Icon name='spinner' color='white' />
      ),
    },
    socialButton: {
      text: 'Daftar dengan',
      platform: 'google',
      color: 'brand',
      input: {
        type: 'button',
        onClick: googleHandler,
      },
    },
  };

  const authFooter = {
    text: 'Sudah mempunyai akun?',
    button: {
      element: 'link',
      theme: 'color',
      text: 'Masuk',
      input: {
        to: '/login',
      },
    },
  };

  return (
    <div className={styles.container}>
      <AuthContent header={authHeader} body={authBody} footer={authFooter} />
    </div>
  );
}

export default Register;
