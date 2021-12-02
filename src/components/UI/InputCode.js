import styles from './InputCode.module.scss';

function InputCode({ size }) {
  const classes = `${styles.input} ${styles[size]}`;
  return (
    <input
      type="text"
      name="text"
      id="text"
      maxLength="1"
      className={classes}
    />
  );
}

export default InputCode;
