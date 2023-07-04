import { useEffect, useRef, useState } from "react";
import "@/styles/globals.css";

import Layout from "@/components/layout/layout";
import { Loader } from "@/components/loader/loader";

import Meta from "@/seo/meta/meta";

import theme from "@/theme";
import Fonts from "@/theme/fonts/fonts";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingBar from "react-top-loading-bar";
import { motion } from "framer-motion";
import Cursor from "@/components/cursor/cursor";

import { isMobile } from "react-device-detect";
import { ScrollProvider } from "@/hooks/useLenis";

const variants = {
  hidden: { opacity: 0, x: -10, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -10 },
};

export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  const LoadingBarRef = useRef<any>(null);

  const handleTransitionEnd = () => {
    const root = document.getElementById("__next");
    const loader = document.getElementById("loader")!;
    root?.removeChild(loader);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRouteComplete = (url: any) => {
    LoadingBarRef.current.complete();
  };

  const handleRouteStart = (url: any) => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err: { cancelled: any }, url: any) => {
    setTimeout(function () {
      if (err.cancelled) {
        return null;
      }
      LoadingBarRef.current.complete();
    }, 300);
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Meta title={"FVTVRA | IN GAFFER WE TRVST"} />
      <LoadingBar ref={LoadingBarRef} height={8} color="#B53145" />
      <Loader onTransitionEnd={handleTransitionEnd} isLoading={isLoading} />
      <Cursor />
      <Layout>
        <motion.main
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
        >
          {isLoading === false ? <Component {...pageProps} /> : <></>}
        </motion.main>
      </Layout>
    </ChakraProvider>
  );
}
