import axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import Main from '../components/home/main';
import FlashDeals from '../components/home/flashDeals';
import Category from '../components/home/category';
import { BsArrowRightCircle } from 'react-icons/bs';
import {
  gamingSwiper,
  homeImprovSwiper,
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from '../data/home';
import { useMediaQuery } from 'react-responsive';
import ProductsSwiper from '../components/productsSwiper';
import db from '../utils/db';
import Product from '../models/Product';
import ProductCard from '../components/productCard';

export default function Home({ country, products }) {
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: '(max-width:850px)' });
  const isMobile = useMediaQuery({ query: '(max-width:550px)' });
  return (
    <>
      <Header country={country} />
      {/* {session ? 'You Are logged' : ' Please Log in '} */}
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header="Dreases"
              product={women_dresses}
              background="#f2ca47"
            />
            {!isMedium && (
              <Category
                header="Shoes"
                product={women_shoes}
                background="#ec6342"
              />
            )}

            <Category
              header="Accessories"
              product={women_accessories}
              background="#000"
            />
          </div>
          <ProductsSwiper products={women_swiper} />
          <ProductsSwiper
            products={gamingSwiper}
            header="For Games"
            bg="#ec6342"
          />
          <ProductsSwiper
            products={homeImprovSwiper}
            header="House Improvment"
            bg="#841e3e"
          />
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

//! Development Mode
export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  //? find() : fetch all products
  //? sort createdAt: -1 : new first
  //? lean(): tells Mongoose to skip hydrating the result documents,  https://mongoosejs.com/docs/tutorials/lean.html
  // console.log(products);
  let data = await axios
    .get('')
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {});
  data = {
    name: 'Germany',
    flag: {
      emojitwo: 'https://cdn.ipregistry.co/flags/emojitwo/de.svg',
    },
  };
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      country: {
        name: data.name,
        flag: data.flag.emojitwo,
      },
    },
  };
}

// //! Uncomment in Production mode
/*
export async function getServerSideProps(){
db.connectDb();
let products = await Product.find().sort({ createdAt: -1 }).lean();
? find() : fetch all products
? sort createdAt: -1 : new first
? lean(): tells Mongoose to skip hydrating the result documents,  https://mongoosejs.com/docs/tutorials/lean.html
console.log(products);
  let data = await axios
  .get('https://api.ipregistry.co/?key=ddg0utxgkql4pksy')
  .then((res)=>{
    return res.data.location.country;
  }).catch((err)=>{
    console.log(err)
  })
  return{
    props:{
products: JSON.parse(JSON.stringify(products)),
      country:{
        name: data.name,
        flag: data.flag.emojitwo,
      },
    },
  };
}
 */
