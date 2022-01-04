import styles from './InputCounter.module.scss';
import Icon from '../Icons/Icon';

function InputCounter({ onMinusClick, onPlusClick, onInputChange, value }) {
  return (
    <div className={styles.container}>
      <Icon name='minus' color='gray' onClick={onMinusClick} />
      <input
        type='text'
        id='quantity'
        name='quantity'
        step='1'
        value={value}
        onChange={onInputChange}
      />
      <Icon name='add' color='gray' onClick={onPlusClick} />
    </div>
  );
}

export default InputCounter;
