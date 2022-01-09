import './Swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

function ThumbSwiper({ assets, onSwiper }) {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={'auto'}
      spaceBetween={18}
      onSwiper={onSwiper}
      grabCursor={true}
      watchSlidesProgress
      navigation
      className="thumb-swiper"
    >
      {assets.map(asset => (
        <SwiperSlide key={asset.id}>
          {/* <li className={styles.slideItem}> */}
          <img src={asset.url} alt={asset.filename} />
          {/* </li> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ThumbSwiper;
