import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import flama from "../../../../public/assets/logo/fvtvra.svg";
import hamburger from "../../../../public/assets/icons/hamburger-menu.svg";
import shopping from "../../../../public/assets/icons/shopping-bag-alt.svg";
import { useContext, useState } from "react";
import ShoppingDrawer from "./shoppingDrawer/shoppingDrawer";
import NavigationDrawer from "./navigationDrawer/navigationDrawer";
import { NavbarProps } from "./model";
import ShoppingCartContext from "@/context/shoppingCartContext";
import Badge from "./badge/badge";

const Navbar: React.FC<NavbarProps> = ({
  handleDrawer,
  handleShoppingDrawer,
}) => {
  const router = useRouter();
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <Box
      w="100%"
      h="100px"
      p="4rem 3rem 3rem 3rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      pointerEvents="none"
      userSelect="none"
      position="relative"
    >
      <Box
        w="40px"
        h="40px"
        bg="white"
        border="1px solid white"
        p="0rem 0.45rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        pointerEvents="all"
        cursor="pointer"
        onClick={() => handleDrawer()}
      >
        <Image priority src={hamburger} alt="shopping" />
      </Box>
      <Box
        onClick={() => router.push("/")}
        pointerEvents="all"
        cursor="pointer"
      >
        <Image priority src={flama} alt="Fvtvra Logo" width={160} />
      </Box>
      <Box
        w="40px"
        h="40px"
        bg="white"
        border="1px solid white"
        p="0rem 0.45rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        pointerEvents="all"
        cursor="pointer"
        position="relative"
        onClick={() => handleShoppingDrawer()}
      >
        <Badge totalItems={shoppingCart} />
        <Image priority src={shopping} alt="shopping" />
      </Box>
    </Box>
  );
};

export default Navbar;
