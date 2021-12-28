import styles from './AuthFooter.module.scss';
import Button from '../UI/Button';

function AuthFooter({ text, icon, button }) {
  return (
    <div className={styles.container}>
      {icon}
      {text && <p className={styles.text}>{text}</p>}
      <Button {...button} />
    </div>
  );
}

export default AuthFooter;
