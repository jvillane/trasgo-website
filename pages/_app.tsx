import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return (
    <>
      <Head>
        <title>Trasgo Mueblería | calidad de diseño e implementación</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-249916534-1">
      </Script>
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
    
            gtag('config', 'UA-249916534-1');
            console.log('bla');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
