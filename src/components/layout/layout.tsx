import React, { useEffect, useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Nid from "nid";
import ShoppingCartContext from "@/context/shoppingCartContext";
import { getUser } from "@/constants/constants";
import NavigationDrawer from "./navbar/navigationDrawer/navigationDrawer";
import ShoppingDrawer from "./navbar/shoppingDrawer/shoppingDrawer";
import Reel from "../reel/reel";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ScrollProvider } from "@/hooks/useLenis";
import { AnimatePresence } from "framer-motion";
import ReelsIg from "../reelsIg/reelsIg";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDrawer, setDrawer] = useState<boolean>(false);
  const [isShoppingDrawer, setShoppingDrawer] = useState<boolean>(false);
  const [isReel, setReel] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [user_id, setUserId] = useState<any>();
  const [shoppingCart, setShoppingCart] = useState<any>([]);
  const [hasItems, setHasItems] = useState<any>();
  const [totalCart, setTotalCart] = useState<any>(0);
  const { colorMode } = useColorMode();

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      localStorage.setItem("user", Nid(12));
      setUserId(localStorage.getItem("user"));
    } else {
      setUserId(localStorage.getItem("user"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isDrawer || isShoppingDrawer) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isDrawer, isShoppingDrawer]);

  useEffect(() => {
    if (user_id) {
      getInitialShoppingCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id]);

  useEffect(() => {
    let total = 0;
    shoppingCart.forEach((item: any) => {
      total = total + item.price;
    });
    setTotalCart(total);
  }, [shoppingCart]);

  const getInitialShoppingCart = () => {
    getUser(user_id).then((data: any) => {
      if (data.length !== 0) {
        const cartItems = data[0] === undefined ? undefined : data[0].items;
        setShoppingCart(cartItems);
        setHasItems(data[0].has_items);
      }
    });
  };

  const handlePatchShoppingCart = (cart: any) => {
    setShoppingCart(cart);
  };

  const handleShoppingCart = (item: any) => {
    setShoppingCart((prevState: any) => [...prevState, item]);
  };

  const handleRemoveItemShoppingCart = (item: any) => {
    setShoppingCart(
      shoppingCart.filter(
        (cart: any) => cart.slug.current !== item.slug.current
      )
    );
  };

  const handleRemoveAllShoppingCart = () => {
    setShoppingCart([]);
  };

  const handleHasItems = () => {
    setHasItems(true);
  };

  const handleReelVideo = (showReel: any, urlVideo: any) => {
    setReel(showReel);
    setUrlVideo(urlVideo);
  };

  const handleShoppingDrawer = () => {
    setShoppingDrawer(!isShoppingDrawer);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        user_id,
        shoppingCart,
        totalCart,
        hasItems,
        isReel,
        isDrawer,
        isShoppingDrawer,
        urlVideo,
        handleShoppingCart,
        handleRemoveItemShoppingCart,
        handleRemoveAllShoppingCart,
        handleHasItems,
        handleReelVideo,
        handleShoppingDrawer,
        handlePatchShoppingCart,
      }}
    >
      <ScrollProvider>
        <Box
          w="100%"
          h="auto"
          bg={colorMode === "dark" ? "black" : "secondaryWhite"}
          position="relative"
          zIndex={0}
        >
          <Navbar
            handleDrawer={() => setDrawer(true)}
            handleShoppingDrawer={() => setShoppingDrawer(true)}
          />
          <Box
            w="100%"
            h="auto"
            p={[
              "140px 0rem 0rem 0rem",
              "180px 0rem 0rem 0rem",
              "180px 0rem 0rem 0rem",
              "180px 0rem 0rem 0rem",
            ]}
          >
            {children}
          </Box>
          <ReelsIg />
          <Footer />
          <Reel />
        </Box>
      </ScrollProvider>
      <AnimatePresence mode="wait">
        {isDrawer && (
          <NavigationDrawer
            isOpen={isDrawer}
            handleDrawer={() => setDrawer(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isShoppingDrawer && (
          <ShoppingDrawer
            isOpen={isShoppingDrawer}
            handleDrawer={() => setShoppingDrawer(false)}
          />
        )}
      </AnimatePresence>
    </ShoppingCartContext.Provider>
  );
};

export default Layout;
