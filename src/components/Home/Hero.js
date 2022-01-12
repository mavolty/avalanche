import styles from './Hero.module.scss';
import image from '../../assets/img/hero.webp';

function Hero() {
  return (
    <section className={styles.container}>
      <figure className={styles.media}>
        <img src={image} alt='Put serum on top of the hand' />
      </figure>
      <h1 className={styles.heading}>
        Skincare made with the world's finest plant oils and absolutes
      </h1>
      <p className={styles.description}>
        We all have skincare concerns: it's not always 'simple'. Glowbar makes
        it easy with 30-minute expert sessions targeting your top skincare
        concerns.
      </p>
    </section>
  );
}

export default Hero;
