// Imports from packages
import type { AppProps } from 'next/app'
import Head from 'next/head'
// SCSS Imports
import '../styles/global.scss'



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/microphone.svg" type="image/x-icon" />
        <title>Podcast</title>
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}