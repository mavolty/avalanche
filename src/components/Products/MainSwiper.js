import './Swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/thumbs/thumbs.scss';
import 'swiper/modules/pagination/pagination.scss';
import SwiperCore, { Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
SwiperCore.use([Thumbs, Pagination]);

function MainSwiper({ assets, thumbsSwiper }) {
  return (
    <>
      {!thumbsSwiper?.destroyed && (
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{ clickable: true }}
          grabCursor={true}
          className="main-swiper"
        >
          {assets.map(asset => (
            <SwiperSlide key={asset.id}>
              <img src={asset.url} alt={asset.filename} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default MainSwiper;
