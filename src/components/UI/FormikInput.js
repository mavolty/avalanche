import styles from './Input.module.scss';
import { useField } from 'formik';

function FormikInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const inputErrorClasses = meta.touched && meta.error ? styles.inputError : '';
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} ${inputErrorClasses}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export default FormikInput;
