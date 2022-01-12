import styles from './Features.module.scss';
import Button from '../UI/Button';
import firstImage from '../../assets/img/feature-1.webp';
import secondImageBig from '../../assets/img/feature-2-big.webp';
import secondImageSmall from '../../assets/img/feature-2-small.webp';

function Features() {
  return (
    <section className={styles.container}>
      <div className={`${styles.feature} ${styles['feature--1']}`}>
        <figure className={styles.media}>
          <img src={firstImage} alt='Girl with beautiful makeup' />
        </figure>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Open your mind to the possibility of you. For skin that looks
            professional
          </h2>
          <p className={styles.description}>
            A simplified ritual of powerful antioxidants and naturally
            restorative elements, for a modern and healthy approach to skin.
            Advanced, transformative organic formulations that revitalize and
            regenerate below the surface for immediate results.
          </p>
          <Button
            element='link'
            theme='primary'
            text='Shop Now'
            input={{ to: '#' }}
          />
        </div>
      </div>

      <div className={`${styles.feature} ${styles['feature--2']}`}>
        <figure className={styles['media-big']}>
          <img src={secondImageBig} alt='Another girl with beautiful makeup' />
        </figure>
        <figure className={styles['media-small']}>
          <img src={secondImageSmall} alt='A bunch of makeup' />
        </figure>
        <div className={styles.content}>
          <h2 className={styles.title}>
            No science experiments. Just great skincare. Touch your beauty
          </h2>
          <p className={styles.description}>
            A simplified ritual of powerful antioxidants and naturally
            restorative elements, for a modern and healthy approach to skin.
            Advanced, transformative organic formulations that revitalize and
            regenerate below the surface for immediate results.
          </p>
          <Button
            element='link'
            theme='primary'
            text='Shop Now'
            input={{ to: '#' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
