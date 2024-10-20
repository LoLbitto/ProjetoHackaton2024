import "../styles/globals.css";
import { Arapey } from "next/font/google";
import Head from 'next/head';

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${arapey.style.fontFamily};
        }
      `}</style>
      <Head>
      <link rel="icon" href="/favicon.png" />
      <title>Horti-Bairro</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
