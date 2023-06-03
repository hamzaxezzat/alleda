import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper';

function ProductsSwiper({ header, products }) {
  console.log(products);
  return (
    <div className={styles.wrapper}>
      {header && <div className={styles.header}>{header}</div>}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="products__swiper"
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <div className={styles.product}>
              <div className={styles.product__img}></div>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.product__infos}>
                <h1>
                  {product.name.length > 30
                    ? `${product.name.slice(0, 30)}...`
                    : product.name}
                </h1>
                <span>USD {product.price}$</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductsSwiper;
