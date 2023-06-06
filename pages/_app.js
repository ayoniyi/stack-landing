import "../styles/globals.css";
import "atropos/css";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Stack</title>
        <meta name="description" content="This is Stack" />

        <link rel="icon" href="/logo.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
