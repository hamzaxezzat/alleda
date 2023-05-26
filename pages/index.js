import axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import Main from '../components/home/main';

export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <>
      <Header country={country} />
      {/* {session ? 'You Are logged' : ' Please Log in '} */}
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
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
