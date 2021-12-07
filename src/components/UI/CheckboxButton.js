import styles from './CheckboxButton.module.scss';
import { useState } from 'react';

function CheckboxButton({ text, input }) {
  const [isChecked, setIsChecked] = useState(false);

  const changeHandler = event => {
    setIsChecked(event.target.checked);
  };

  const containerClasses = `${styles.container} ${
    isChecked ? styles.checked : ''
  }`;

  return (
    <div className={containerClasses}>
      <input
        type="checkbox"
        {...input}
        className={styles.checkbox}
        onChange={changeHandler}
      />
      <label htmlFor={input.id} className={styles.text}>
        {text}
      </label>
    </div>
  );
}

export default CheckboxButton;
