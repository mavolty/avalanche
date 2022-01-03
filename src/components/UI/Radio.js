import styles from './Radio.module.scss';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

function Radio({ label, options, radio, ...props }) {
  let [selected, setSelected] = useState(options[0]);
  return (
    <RadioGroup value={selected} onChange={setSelected} {...props}>
      <RadioGroup.Label className={styles.srOnly}>
        {label.text}
      </RadioGroup.Label>
      {options.map(option => (
        <RadioGroup.Option key={option} value={option}>
          {({ checked }) => (
            <span
              className={`${styles.radio} ${
                checked ? styles.radioChecked : ''
              }`}
            >
              {option}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

export default Radio;
