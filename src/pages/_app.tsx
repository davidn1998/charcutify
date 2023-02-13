import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ParallaxProvider } from "react-scroll-parallax";

// Route Events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
