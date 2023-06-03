import axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import Main from '../components/home/main';
import FlashDeals from '../components/home/flashDeals';
import Category from '../components/home/category';
import { BsArrowRightCircle } from 'react-icons/bs';
import { women_accessories, women_dresses, women_shoes } from '../data/home';
import { useMediaQuery } from 'react-responsive';

export default function Home({ country }) {
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
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

//! Development Mode
export async function getServerSideProps() {
  let data = await axios
    .get('')
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      // console.log(err)
    });
  // console.log(data)
  data = {
    name: 'Germany',
    flag: {
      emojitwo: 'https://cdn.ipregistry.co/flags/emojitwo/de.svg',
    },
  };
  return {
    props: {
      country: {
        name: data.name,
        flag: data.flag.emojitwo,
      },
    },
  };
}

// //! Uncomment in Production mode
// export async function getServerSideProps(){
//   let data = await axios
//   .get('https://api.ipregistry.co/?key=ddg0utxgkql4pksy')
//   .then((res)=>{
//     return res.data.location.country;
//   }).catch((err)=>{
//     console.log(err)
//   })
//   return{
//     props:{
//       country:{
//         name: data.name,
//         flag: data.flag.emojitwo,
//       },
//     },
//   };
// }
