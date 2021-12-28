import styles from './AuthHeader.module.scss';

function AuthHeader({ featuredIcon, title, text }) {
  return (
    <div className={styles.container}>
      {featuredIcon && featuredIcon}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default AuthHeader;
