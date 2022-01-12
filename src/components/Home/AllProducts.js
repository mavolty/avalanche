import styles from './AllProducts.module.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import Button from '../UI/Button';
import Arrow from '../Icons/Arrow';
import ProductItem from '../../components/Products/ProductItem';
import ProductItemSkeleton from '../../components/Products/ProductItemSkeleton';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

function AllProducts({ products, isLoading }) {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <h2 className={styles.title}>
          As usual, Cosmetsy dedicates all four Advent Sundays to abundant
          competitions and beautiful prizes.
        </h2>
        <div className={styles.info}>
          <p className={styles.amount}>320.000</p>
          <p className={styles.limited}>Limited release available now</p>
        </div>
      </div>

      <div className={styles.row}>
        <p className={styles.description}>
          As usual, Cosmetsy dedicates all four Advent Sundays to abundant
          competitions and beautiful prizes.
        </p>
        <Button
          element='link'
          theme='black'
          text='View All Products'
          input={{
            to: '/products',
          }}
          icon={<Arrow direction='right' />}
        />
      </div>

      <Swiper
        className={styles.products}
        navigation={true}
        spaceBetween={32}
        slidesPerView={'auto'}
        grabCursor={true}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className={styles.productSlide}>
            {isLoading && <ProductItemSkeleton />}
            {!isLoading && <ProductItem {...product} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default AllProducts;
