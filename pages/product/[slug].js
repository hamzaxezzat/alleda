import styles from '../../styles/product.module.scss';
import db from '../../utils/db';
import React from 'react';
import { useRouter } from 'next/router';
import Product from '../../models/Product';

function product({ product }) {
  console.log(product);
  return <div></div>;
}

export default product;

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();
  // -------
  let product = await Product.findOne({ slug }).lean();
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
    priceRange:
      prices.length > 1
        ? `From ${prices[0]} to ${prices[prices.length - 1]}$`
        : '',
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].quantity,
  };
  // console.log('New Product', newProduct);
  // -------
  db.disconnectDb();
  // console.log(currentProduct);
  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
