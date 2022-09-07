// Packages imports
import type { AppProps } from 'next/app'
import Head from 'next/head'
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
        <title>Podcast</title>
      </Head>
      
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