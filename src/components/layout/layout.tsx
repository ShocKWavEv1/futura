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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDrawer, setDrawer] = useState<boolean>(false);
  const [isShoppingDrawer, setShoppingDrawer] = useState<boolean>(false);
  const [isReel, setReel] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [user_id, setUserId] = useState<any>();
  const [shoppingCart, setShoppingCart] = useState<any>([]);
  const [hasItems, setHasItems] = useState<any>();
  const [totalCart, setTotalCart] = useState<any>(0);
  const { colorMode, toggleColorMode } = useColorMode();

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

  const handleHasItems = () => {
    setHasItems(true);
  };

  const handleReelVideo = (showReel: any, urlVideo: any) => {
    setReel(showReel);
    setUrlVideo(urlVideo);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        user_id,
        shoppingCart,
        totalCart,
        hasItems,
        isReel,
        urlVideo,
        handleShoppingCart,
        handleRemoveItemShoppingCart,
        handleHasItems,
        handleReelVideo,
      }}
    >
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
        <Box w="100%" h="auto" p="4rem 4rem 0rem 4rem">
          {children}
        </Box>
        <Footer />
        <Reel />
        {isDrawer && (
          <NavigationDrawer
            isOpen={isDrawer}
            handleDrawer={() => setDrawer(false)}
          />
        )}
        {isShoppingDrawer && (
          <ShoppingDrawer
            isOpen={isShoppingDrawer}
            handleDrawer={() => setShoppingDrawer(false)}
          />
        )}
      </Box>
    </ShoppingCartContext.Provider>
  );
};

export default Layout;
