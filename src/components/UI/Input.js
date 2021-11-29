import styles from './Input.module.scss';

function Input({ label, input }) {
  return (
    <div className={styles.field}>
      <label htmlFor={input.id} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} {...input} />
    </div>
  );
}

export default Input;
