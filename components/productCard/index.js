import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import ProductSwiper from './ProductSwiper';

export default function ProductCard({ product }) {
  //   console.log('product:', product._id);
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  const [prices, setPrices] = useState(
    product.subProducts[active]?.sizes
      .map((size) => size.price)
      .sort((a, b) => a - b)
  );
  const [styless, setStyless] = useState(
    product.subProducts.map((product) => product.color)
  );
  useEffect(() => {
    setImages(product.subProducts[active].images);
    setPrices(
      product.subProducts[active]?.sizes
        .map((size) => size.price)
        .sort((a, b) => a - b)
    );
  }, [active]);
  //   product.subProducts[active];
  //   console.log('styles', styles);
  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <Link href={`/product/${product.slug}?style=${active}`}>
          <div>
            <ProductSwiper images={images} />
          </div>
        </Link>
        {product.subProducts[active].discount ? (
          <div className={styles.product__discount}>
            -{product.subProducts[active].discount}%
          </div>
        ) : (
          ''
        )}
        <div className={styles.product__infos}>
          <h1>
            {product.name.length > 45
              ? `${product.name.substring(0, 45)}...`
              : product.name}
          </h1>
          <span>
            {prices.length == 1
              ? `USD ${prices[0]}`
              : `USD ${prices[0]} - ${prices[prices.length - 1]}$`}
          </span>
          <div className={styles.product__colors}>
            {styless &&
              styless.map((style, i) =>
                style.image ? (
                  <img
                    className={i == active && styles.active}
                    key={i}
                    src={style.image}
                    alt=""
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  />
                ) : (
                  <span
                    key={i}
                    style={{ backgroundColor: `${style.color}` }}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  ></span>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
