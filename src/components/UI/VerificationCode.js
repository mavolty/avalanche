import styles from './VerificationCode.module.scss';
import InputCode from './InputCode';

function VerificationCode({ size }) {
  return (
    <div className={styles.container}>
      <InputCode size={size} />
      <InputCode size={size} />
      <InputCode size={size} />
      <InputCode size={size} />
    </div>
  );
}

export default VerificationCode;
