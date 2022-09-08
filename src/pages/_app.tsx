// Packages imports
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SmileySad } from "phosphor-react";
// Components imports
import Header from '../components/Header'
import Player from '../components/Player'
// SCSS Imports
import '../styles/global.scss'
import styles from '../styles/app.module.scss'




export default function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/microphone.svg" type="image/x-icon" />
        <title>Podcast | Aplicativo para ouvir podcast</title>
      </Head>
      
      <div className={styles.mobile}>Aplicativo disponível apenas para telas maiores...<SmileySad size={50}/></div>

      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Header />
          <Component {...pageProps} />
        </div>
        <Player />
      </div>
    </>
  )
}