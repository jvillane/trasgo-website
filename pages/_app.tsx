import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trasgo Mueblería | calidad de diseño e implementación</title>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-249916534-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-249916534-1');
        `}
        </Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
