import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import store from "../../store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}