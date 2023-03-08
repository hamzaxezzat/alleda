import '../styles/Home.module.scss'
import { Provider } from 'react-redux'
import store from "../store"
// PersistGate:  delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

export default function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
  )
}