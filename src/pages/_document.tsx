import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {

  
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta name="author" content="Willian Igor - YellowMoonAstronaut" />
        <meta name="description" content="Este é um app para reprodução de podcasts feito com o intúito de aprendizagem." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
