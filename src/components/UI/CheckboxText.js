import styles from './CheckboxText.module.scss';
import Checkbox from './Checkbox';

function CheckboxText({ text }) {
  return (
    <div className={styles.container}>
      <Checkbox />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default CheckboxText;
