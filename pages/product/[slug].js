import styles from '../../styles/product.module.scss';
import db from '../../utils/db';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Product from '../../models/Product';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Category from '../../models/Category';
import SubCategory from '../../models/subCategory';
import MainSwiper from '../../components/productPage/mainSwiper';
import Infos from '../../components/productPage/infos';

function product({ product }) {
  const [activeImg, setActiveImg] = useState('');
  console.log(product.subCategories);
  // console.log(product.name);
  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header />
      <div className={styles.product}>
        <div className={styles.product__container}>
          <div className={styles.path}>
            Home / {product.category.name}
            {product.subCategories.map((sub) => (
              <span key={sub.name}>/{sub.name}</span>
            ))}
          </div>
          <div className={styles.product__main}>
            <MainSwiper images={product.images} activeImg={activeImg} />
            <Infos product={product} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default product;

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();
  // -------
  let product = await Product.findOne({ slug })
    .populate({ path: 'category', model: Category })
    .populate({ path: 'subCategories', model: SubCategory })
    .lean();
  let subProduct = product.subProducts[style];
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });
  // console.log(prices);
  let newProduct = {
    ...product,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    priceRange: subProduct.discount
      ? `From ${(prices[0] - prices[0] / subProduct.discount).toFixed(2)} to ${(
          prices[prices.length - 1] -
          prices[prices.length - 1] / subProduct.discount
        ).toFixed(2)}$`
      : `From ${prices[0]} to ${prices[prices.length - 1]}$`,
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };
  // -------
  db.disconnectDb();
  // console.log(currentProduct);
  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
