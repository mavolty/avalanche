import styles from './Login.module.scss';
import image from '../../assets/Images/login.jpg';
import AuthContent from '../../components/Auth/AuthContent';
import Icon from '../../components/Icons/Icon';
import { authWithGoogle, login } from '../../store/auth-action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authSelector = useSelector(state => state.auth);
  const [alertState, setAlertState] = useState(null);
  const { isLoading, error, success } = authSelector.loginStatus;
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (!isLoading && error && !success) {
      setAlertState({
        type: 'error',
        message: error,
      });
    }
  }, [isLoading, error, success]);

  const submitHandler = event => {
    event.preventDefault();
    dispatch(
      login({ email: event.target[0].value, password: event.target[1].value })
    ).then(result => {
      if (result.meta.requestStatus === 'fulfilled')
        navigate(from, { replace: true });
    });
  };

  const googleHandler = async () => {
    dispatch(authWithGoogle()).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate(from, { replace: true });
      }
    });
  };

  const formInputs = [
    {
      label: 'Email',
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      autoComplete: 'email',
    },
    {
      label: 'Password',
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      autoComplete: 'password',
    },
  ];

  const authHeader = {
    title: 'Sign In',
    text: 'Sign in to your account',
  };

  const authBody = {
    alert: alertState,
    inputs: formInputs,
    defaultForm: {
      onSubmit: submitHandler,
    },
    checkboxText: {
      text: 'Remember me',
      input: {
        id: 'remember',
        name: 'remember',
        type: 'checkbox',
      },
    },
    rowButton: {
      element: 'link',
      theme: 'color',
      text: 'Forgot password?',
      input: {
        to: '/password/reset',
      },
    },
    actionButton: {
      text: 'Sign In',
      input: {
        type: 'submit',
      },
      icon: isLoading && !error && !success && (
        <Icon name='spinner' color='white' />
      ),
    },
    socialButton: {
      text: 'Masuk dengan',
      platform: 'google',
      color: 'brand',
      input: {
        type: 'button',
        onClick: googleHandler,
      },
    },
  };

  const authFooter = {
    text: "Don't have an account?",
    button: {
      element: 'link',
      theme: 'color',
      text: 'Sign Up',
      input: {
        to: '/register',
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AuthContent header={authHeader} body={authBody} footer={authFooter} />
      </div>
      <figure className={styles.right}>
        <img src={image} alt='Login' className={styles.image} />
      </figure>
    </div>
  );
}

export default Login;
