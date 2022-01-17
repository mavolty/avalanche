import styles from './Highlights.module.scss';
import firstImage from '../../assets/img/highlight-1.webp';
import secondImage from '../../assets/img/highlight-2.webp';

function Highlights() {
  return (
    <section className={styles.container} aria-label='Highlights'>
      <div className={`${styles.highlight} ${styles['highlight--1']}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            The ultimate in skincare, made with the world's finest plant oils
          </h2>
          <p className={styles.description}>
            Glowbar is a complete skincare solution that's designed to help you
            achieve your skin's ultimate glow.
          </p>
        </div>
        <figure className={styles.media}>
          <img
            className={styles.image}
            src={firstImage}
            alt='Another bunch of makeup'
          />
        </figure>
      </div>

      <div className={`${styles.highlight} ${styles['highlight--2']}`}>
        <figure className={styles.media}>
          <img
            className={styles.image}
            src={secondImage}
            alt='Girl is wearing white shirt with beautiful makeup'
          />
        </figure>
        <div className={styles.content}>
          <h2 className={styles.title}>
            The ultimate in skincare, made with the world's finest plant oils
          </h2>
          <p className={styles.description}>
            Glowbar is a complete skincare solution that's designed to help you
            achieve your skin's ultimate glow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
