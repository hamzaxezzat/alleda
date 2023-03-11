// import '../styles/Home.module.scss'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from "../store"
// PersistGate:  delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { SessionProvider } from "next-auth/react"

import Head from 'next/head'

let persistor = persistStore(store)

export default function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <>
      <Head>
        <title>Alleda</title>
        <meta name="description" content="Alleda- Online shopping service for all of you need" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  )
}