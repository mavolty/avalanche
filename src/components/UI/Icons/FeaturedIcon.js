import styles from './FeaturedIcon.module.scss';
import Envelope from './Envelope';
import Key from './Key';
import CheckCircle from './CheckCircle';

function FeaturedIcon({ name, color }) {
  if (name === 'envelope' && color === 'primary')
    return (
      <div className={styles.outerPrimary}>
        <Envelope color={color} />
      </div>
    );

  if (name === 'key' && color === 'primary')
    return (
      <div className={styles.outerPrimary}>
        <Key color={color} />
      </div>
    );

  if (name === 'check-circle' && color === 'success')
    return (
      <div className={styles.outerSuccess}>
        <CheckCircle color={color} />
      </div>
    );

  return;
}

export default FeaturedIcon;
