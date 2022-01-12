import styles from './Home.module.scss';
import Hero from '../../components/Home/Hero';
import Features from '../../components/Home/Features';
import AllProducts from '../../components/Home/AllProducts';
import Highlights from '../../components/Home/Highlights';
import { commerce } from '../../services/commerce';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useEffect, useState, useCallback } from 'react';

SwiperCore.use([Navigation, Pagination]);

const initialProducts = [];

for (let i = 0; i < 4; i++) {
  initialProducts.push({
    id: i,
    name: 'Product ' + i,
    image: {
      url: 'https://picsum.photos/200/300',
    },
    price: {
      after: '$' + i * 10,
    },
  });
}

function Home() {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const commerceProducts = await commerce.products.list();
      const updatedProducts = commerceProducts.data.slice(0, 7);

      setProducts(updatedProducts);
    } catch (error) {
      console.log('There was an error getting the products: ', error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={styles.container}>
      <Hero />
      <Features />
      <AllProducts products={products} isLoading={isLoading} />
      <Highlights />
    </div>
  );
}

export default Home;
