import styles from './Avatar.module.scss';

function Avatar({ alt, src, size = 'md', ...props }) {
  // Size of the avatar
  // sm = 24x24
  // md = 32x32
  // lg = 48x48
  // xl = 64x64

  const mediaClasses = `${styles.media} ${styles[size] || ''}`;
  return (
    <figure className={mediaClasses} {...props}>
      <img alt={alt} src={src} />
    </figure>
  );
}

export default Avatar;
