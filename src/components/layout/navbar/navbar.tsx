import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import flama from "../../../../public/assets/logo/fvtvra.svg";
import hamburger from "../../../../public/assets/icons/hamburger-menu.svg";
import shopping from "../../../../public/assets/icons/shopping-bag-alt.svg";
import { useContext, useEffect, useState } from "react";
import { NavbarProps } from "./model";
import ShoppingCartContext from "@/context/shoppingCartContext";
import Badge from "./badge/badge";

const Navbar: React.FC<NavbarProps> = ({
  handleDrawer,
  handleShoppingDrawer,
}) => {
  const router = useRouter();
  const { shoppingCart } = useContext(ShoppingCartContext);

  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    if (router.pathname === "/resumen") {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }, [router]);

  return (
    <Box
      w="100%"
      h="100px"
      p={[
        "2rem 1.5rem 3rem 1.5rem",
        "4rem 1.5rem 3rem 1.5rem",
        "4rem 2rem 3rem 2rem",
        "4rem 3rem 3rem 3rem",
      ]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      pointerEvents="none"
      userSelect="none"
      position="relative"
    >
      <Box
        w={["35px", "40px", "40px", "40px"]}
        h={["35px", "40px", "40px", "40px"]}
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
        className="link"
      >
        <Image priority src={hamburger} alt="shopping" />
      </Box>
      <Box
        w={["120px", "140px", "160px", "160px"]}
        onClick={() => router.push("/")}
        pointerEvents="all"
        className="link"
      >
        <Image priority src={flama} alt="Fvtvra Logo" />
      </Box>
      <Box
        w={["35px", "40px", "40px", "40px"]}
        h={["35px", "40px", "40px", "40px"]}
        bg={showCart ? "white" : "transparent"}
        border={showCart ? "1px solid white" : "none"}
        p="0rem 0.45rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        pointerEvents="all"
        cursor={showCart ? "pointer" : ""}
        position="relative"
        onClick={() => (showCart ? handleShoppingDrawer() : null)}
        className={showCart ? "link" : ""}
      >
        {showCart && (
          <>
            <Badge totalItems={shoppingCart} />
            <Image priority src={shopping} alt="shopping" />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
