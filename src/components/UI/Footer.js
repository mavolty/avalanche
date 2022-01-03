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
              <Link to='/' className={styles.menuLink}>
                Home
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/about-us' className={styles.menuLink}>
                About
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/services' className={styles.menuLink}>
                Services
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/portfolio' className={styles.menuLink}>
                Portfolio
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/contact' className={styles.menuLink}>
                Contact
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
                  <Link to='/face/face-care' className={styles.categoryLink}>
                    Face Care
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/face/face-mask' className={styles.categoryLink}>
                    Face Mask
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/face/face-wash' className={styles.categoryLink}>
                    Face Wash
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/face/face-serum' className={styles.categoryLink}>
                    Face Serum
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/face/face-cream' className={styles.categoryLink}>
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
                  <Link to='/hair/hair-care' className={styles.categoryLink}>
                    Hair Care
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/hair/hair-mask' className={styles.categoryLink}>
                    Hair Mask
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/hair/hair-wash' className={styles.categoryLink}>
                    Hair Wash
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/hair/hair-serum' className={styles.categoryLink}>
                    Hair Serum
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/hair/hair-cream' className={styles.categoryLink}>
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
                  <Link to='/lip/lip-care' className={styles.categoryLink}>
                    Lip Care
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/lip/lip-mask' className={styles.categoryLink}>
                    Lip Mask
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/lip/lip-wash' className={styles.categoryLink}>
                    Lip Wash
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/lip/lip-serum' className={styles.categoryLink}>
                    Lip Serum
                  </Link>
                </li>
                <li className={styles.categoryItem}>
                  <Link to='/lip/lip-cream' className={styles.categoryLink}>
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
            href='https://www.facebook.com/cosmetsy'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <Icon name="facebook" color="white" /> */}
          </a>
          <a
            href='https://www.instagram.com/cosmetsy'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <Icon name="instagram" color="white" /> */}
          </a>
          <a
            href='https://www.pinterest.com/cosmetsy/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <Icon name="pinterest" color="white" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
