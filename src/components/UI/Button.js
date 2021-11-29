import styles from './Button.module.scss';

function Button({ text, input }) {
  return (
    <button {...input} className={styles.button}>
      {text}
    </button>
  );
}

export default Button;
