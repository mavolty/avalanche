import styles from './SocialButton.module.scss';
import SocialIcon from '../Icons/SocialIcon';

function SocialButton({ text, platform, color, input }) {
  return (
    <button {...input} className={styles.container}>
      <SocialIcon platform={platform} color={color} />
      <p className={styles.text}>
        {`${text} ${platform[0].toUpperCase() + platform.slice(1)}`}
      </p>
    </button>
  );
}

export default SocialButton;
