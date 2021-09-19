import NProgress from "nprogress";
import Router from "next/router";
import Page from "../components/Page";

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
