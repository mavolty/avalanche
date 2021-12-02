import styles from './CheckboxText.module.scss';
import Checkbox from './Checkbox';

function CheckboxText({ text, input }) {
  return (
    <div className={styles.container}>
      <Checkbox input={input} />
      <label htmlFor={input.id} className={styles.text}>
        {text}
      </label>
    </div>
  );
}

export default CheckboxText;
