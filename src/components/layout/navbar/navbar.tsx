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
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar: React.FC<NavbarProps> = ({
  handleDrawer,
  handleShoppingDrawer,
}) => {
  const router = useRouter();
  const { shoppingCart } = useContext(ShoppingCartContext);

  const [showCart, setShowCart] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [initialBG, setInitial] = useState<string>("transparent");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous: number = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest <= 200) {
      setInitial("transparent");
    } else {
      setInitial("#000");
    }
  });

  useEffect(() => {
    if (router.pathname === "/resumen") {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }, [router]);

  return (
    <Box>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          height: "90px",
          backgroundColor: initialBG,
          position: "fixed",
          zIndex: 4,
          transition: "background-color 0.35s ease-in-out",
        }}
      >
        <Box
          w="100%"
          h={["80px", "80px", "80px", "80px", "80px"]}
          p={[
            "0rem 1.5rem 0rem 1.5rem",
            "0rem 1.5rem 0rem 1.5rem",
            "0rem 2rem 0rem 2rem",
            "0rem 3rem 0rem 3rem",
          ]}
          display="grid"
          gridTemplateColumns={[
            "1fr 1fr 1fr",
            "1fr 1fr 1fr",
            "1fr 1fr 1fr",
            "1fr 1fr 1fr",
            "1fr 1fr 1fr",
          ]}
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          pointerEvents="none"
          userSelect="none"
          position="fixed"
          zIndex={5}
          bg="black"
        >
          <Box w="100%" display="flex" alignItems="center">
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
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w={["140px", "140px", "160px", "160px"]}
              onClick={() => router.push("/")}
              pointerEvents="all"
              className="link"
            >
              <Image priority src={flama} alt="Fvtvra Logo" />
            </Box>
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
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
        </Box>
      </motion.div>
    </Box>
  );
};

export default Navbar;
