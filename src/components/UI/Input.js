import styles from './Input.module.scss';

function Input({ label, ...props }) {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
      )}
      <input className={styles.input} {...props} />
    </div>
  );
}

export default Input;
