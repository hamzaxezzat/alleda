import styles from './styles.module.scss';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function MainSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        className="swiper mainSwiper"
      >
        {[...Array(10).keys()].map((i) => (
          <SwiperSlide key={i}>
            <img src={`../../../images/swiper/${i + 1}.jpg`} />
          </SwiperSlide>
        ))}

        {/* <swiperHolder /> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </>
  );
}
