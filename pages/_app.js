import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
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
