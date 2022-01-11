import styles from './EmailVerification.module.scss';
import AuthContent from '../../components/Auth/AuthContent';
import FeaturedIcon from '../../components/Icons/FeaturedIcon';
import { auth } from '../../services/firebase';

function EmailVerification() {
  // const checkSubmitHandler = event => {
  //   window.location.href = `mailto:${auth.currentUser?.email}`;
  // };

  const authHeader = {
    featuredIcon: <FeaturedIcon name='envelope' color='primary' />,
    title: 'Check your email',
    text: `We sent a verification link to ${auth.currentUser?.email}`,
  };

  // const authBody = {
  //   form: {
  //     onSubmit: checkSubmitHandler,
  //   },
  // };

  const authFooter = {
    text: "Didn't receive the email?",
    button: {
      element: 'link',
      theme: 'color',
      text: 'Click to resend',
      input: {
        to: '#',
      },
    },
  };

  return (
    <div className={styles.container}>
      <AuthContent
        header={authHeader}
        // emailBody={authBody}
        footer={authFooter}
      />
    </div>
  );
}

export default EmailVerification;
