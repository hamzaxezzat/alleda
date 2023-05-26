import styles from './styles.module.scss';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

export default function MainSwiper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper mainSwiper"
      >
        {Array.from(Array(10), (e, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={`../../../images/swiper/${i + 1}.jpg`} />
            </SwiperSlide>
          );
        })}

        {/* <swiperHolder /> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </>
  );
}
