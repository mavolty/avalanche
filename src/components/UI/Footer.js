import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Avalanche</h3>
            <p className={styles.brandDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, ipsum eget sagittis consectetur,
            </p>
          </div>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to='/' aria-label='Home' className={styles.menuLink}>
                Home
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link
                to='/about-us'
                aria-label='About Us'
                className={styles.menuLink}
              >
                About
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link
                to='/products'
                aria-label='Shop'
                className={styles.menuLink}
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <ul className={styles.category}>
            <li className={styles.categoryTitle}>
              Face
              <ul className={styles.categoryList}>
                <li className={styles.categoryItem}>
                  <Link
                    to='/face/face-care'
                    aria-label='Face Care'
                    className={styles.categoryLink}
                  >
                    Face Care
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/face/face-mask'
                    aria-label='Face Mask'
                    className={styles.categoryLink}
                  >
                    Face Mask
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/face/face-wash'
                    aria-label='Face Wash'
                    className={styles.categoryLink}
                  >
                    Face Wash
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/face/face-serum'
                    aria-label='Face Serum'
                    className={styles.categoryLink}
                  >
                    Face Serum
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/face/face-cream'
                    aria-label='Face Cream'
                    className={styles.categoryLink}
                  >
                    Face Cream
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={styles.category}>
            <li className={styles.categoryTitle}>
              Hair
              <ul className={styles.categoryList}>
                <li className={styles.categoryItem}>
                  <Link
                    to='/hair/hair-care'
                    aria-label='Hair Care'
                    className={styles.categoryLink}
                  >
                    Hair Care
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/hair/hair-mask'
                    aria-label='Hair Mask'
                    className={styles.categoryLink}
                  >
                    Hair Mask
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/hair/hair-wash'
                    aria-label='Hair Wash'
                    className={styles.categoryLink}
                  >
                    Hair Wash
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/hair/hair-serum'
                    aria-label='Hair Serum'
                    className={styles.categoryLink}
                  >
                    Hair Serum
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/hair/hair-cream'
                    aria-label='Hair Cream'
                    className={styles.categoryLink}
                  >
                    Hair Cream
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={styles.category}>
            <li className={styles.categoryTitle}>
              Lip
              <ul className={styles.categoryList}>
                <li className={styles.categoryItem}>
                  <Link
                    to='/lip/lip-care'
                    aria-label='Lip Care'
                    className={styles.categoryLink}
                  >
                    Lip Care
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/lip/lip-mask'
                    aria-label='Lip Mask'
                    className={styles.categoryLink}
                  >
                    Lip Mask
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/lip/lip-wash'
                    aria-label='Lip Wash'
                    className={styles.categoryLink}
                  >
                    Lip Wash
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/lip/lip-serum'
                    aria-label='Lip Serum'
                    className={styles.categoryLink}
                  >
                    Lip Serum
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link
                    to='/lip/lip-cream'
                    aria-label='Lip Cream'
                    className={styles.categoryLink}
                  >
                    Lip Cream
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          <p>© 2020 All rights reserved.</p>
        </div>
        <div className={styles.social}>
          <a
            href='https://www.facebook.com/avalanche'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            {/* <Icon name="facebook" color="white" /> */}
          </a>
          <a
            href='https://www.instagram.com/avalanche'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            {/* <Icon name="instagram" color="white" /> */}
          </a>
          <a
            href='https://www.pinterest.com/avalanche'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Pinterest'
          >
            {/* <Icon name="pinterest" color="white" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
