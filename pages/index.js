import axios from 'axios'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Home.module.scss'
import { useSession, signIn, signOut } from "next-auth/react"

// const inter = Inter({ subsets: ['latin'] })


export default function Home({country}) {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div >
        <Header country={country} />
        {
            session ? "You Are logged" : " Please Log in "
        }
        <Footer country={country} /> 
        
    </div>
  )
}


//! Development Mode
export async function getServerSideProps(){
  let data = await axios
  .get('')
  .then((res)=>{
    return res.data.location.country;
  }).catch((err)=>{
    // console.log(err)
  })
  // console.log(data)
  data={
    name: 'Germany',
    flag:{
      emojitwo: 'https://cdn.ipregistry.co/flags/emojitwo/de.svg',
    }
  }
  return{
    props:{
      country:{
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
