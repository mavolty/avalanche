import styles from './Checkbox.module.scss';

function Checkbox({ input }) {
  return <input type="checkbox" {...input} className={styles.checkbox} />;
}

export default Checkbox;
