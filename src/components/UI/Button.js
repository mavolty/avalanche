import styles from './Button.module.scss';

function Button({ element, theme, size, text, input, icon = null }) {
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
      <a {...input} className={`${styles.linkPrimary} ${styles[size]}`}>
        {icon}
        <span>{text}</span>
      </a>
    );
  }

  if (element === 'link' && theme === 'secondary-color') {
    return (
      <a {...input} className={`${styles.linkSecondaryColor} ${styles[size]}`}>
        {icon}
        <span>{text}</span>
      </a>
    );
  }

  if (element === 'link' && theme === 'secondary-gray') {
    return (
      <a {...input} className={`${styles.linkSecondaryGray} ${styles[size]}`}>
        {icon}
        <span>{text}</span>
      </a>
    );
  }

  if (element === 'link' && theme === 'color') {
    return (
      <a {...input} className={`${styles.linkColor} ${styles[size]}`}>
        {icon}
        <span>{text}</span>
      </a>
    );
  }

  if (element === 'link' && theme === 'gray') {
    return (
      <a {...input} className={`${styles.linkGray} ${styles[size]}`}>
        {icon}
        <span>{text}</span>
      </a>
    );
  }
}

export default Button;
