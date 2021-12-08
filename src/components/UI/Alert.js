import styles from './Alert.module.scss';
import Icon from './Icons/Icon';

function Alert({ type, message }) {
  const containerClasses = `${styles.container} ${styles[type]}`;

  return (
    <>
      {type && message && (
        <div className={containerClasses}>
          {type === 'error' && <Icon name="exclamation-circle" color="error" />}
          {type === 'success' && <Icon name="tick-circle" color="success" />}
          <p className={styles.message}>{message}</p>
        </div>
      )}
    </>
  );
}

export default Alert;
