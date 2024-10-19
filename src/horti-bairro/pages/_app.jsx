import "../styles/globals.css";
import { Arapey } from "next/font/google";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
