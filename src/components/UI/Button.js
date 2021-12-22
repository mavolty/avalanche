import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
  element = 'button',
  theme = 'primary',
  size = 'lg',
  text,
  input,
  icon = null,
}) {
  // Element of the button
  // button and link

  // Theme of the button
  // primary, secondary-color, secondary-gray, (color, gray, black, white) => only for link

  // Size of the button
  // sm = font small, padding 8 14
  // md = font small, padding 10 16
  // lg = font medium, padding 10 18
  // xl = font medium, padding 12 20
  // xxl = font large, padding 16 28

  if (element === 'button' && theme === 'primary') {
    return (
      <button {...input} className={`${styles.buttonPrimary} ${styles[size]}`}>
        {icon}
        <span>{text}</span>
      </button>
    );
  }

  if (element === 'button' && theme === 'secondary-color') {
    return (
      <button
        {...input}
        className={`${styles.buttonSecondaryColor} ${styles[size]}`}
      >
        {icon}
        <span>{text}</span>
      </button>
    );
  }

  if (element === 'button' && theme === 'secondary-gray') {
    return (
      <button
        {...input}
        className={`${styles.buttonSecondaryGray} ${styles[size]}`}
      >
        {icon}
        <span>{text}</span>
      </button>
    );
  }

  if (element === 'link' && theme === 'primary') {
    return (
      <Link {...input} className={`${styles.linkPrimary} ${styles[size]}`}>
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  if (element === 'link' && theme === 'secondary-color') {
    return (
      <Link
        {...input}
        className={`${styles.linkSecondaryColor} ${styles[size]}`}
      >
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  if (element === 'link' && theme === 'secondary-gray') {
    return (
      <Link
        {...input}
        className={`${styles.linkSecondaryGray} ${styles[size]}`}
      >
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  if (element === 'link' && theme === 'color') {
    return (
      <Link {...input} className={styles.linkColor}>
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  if (element === 'link' && theme === 'gray') {
    return (
      <Link {...input} className={styles.linkGray}>
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  if (element === 'link' && theme === 'black') {
    return (
      <Link {...input} className={styles.linkBlack}>
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  if (element === 'link' && theme === 'white') {
    return (
      <Link {...input} className={styles.linkWhite}>
        {icon}
        <span>{text}</span>
      </Link>
    );
  }
}

export default Button;
