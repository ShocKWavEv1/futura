import Backdrop from "@/components/backdrop/backdrop";
import React from "react";
import { motion } from "framer-motion";
import { NavigationDrawerProps } from "./model";
import { Box, Grid, GridItem, Heading, Show, Text } from "@chakra-ui/react";
import Image from "next/image";
import fvtvra_red from "../../../../../public/assets/logo/fvtvra_red.svg";
import { TfiClose } from "react-icons/tfi";
import { navigation } from "./constants";
import Link from "next/link";
import DrawerResponsive from "./drawerResponsive/drawerResponsive";
import { useRouter } from "next/router";

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  handleDrawer,
}) => {
  const router = useRouter();
  return (
    <Backdrop
      isOpen={isOpen}
      handleBackdrop={() => handleDrawer()}
      type="drawer"
    >
      <Show above="lg">
        <motion.aside
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "120px" : 0 }}
          exit={{ height: 0 }}
          style={{
            backgroundColor: "black",
            position: "absolute",
            top: 0,
            width: "100%",
            borderBottom: "1px solid white",
            padding: "2.6rem 3rem 3rem 3rem",
          }}
        >
          <Grid w="100%" h="100%" templateColumns="repeat(12, 2fr)">
            <GridItem colSpan={[4, 4, 2, 2]}>
              <Box
                w={["160px", "160px", "140px", "160px"]}
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                cursor="pointer"
                onClick={() => router.push("/")}
                className="link"
              >
                <Image priority src={fvtvra_red} alt="Fvtvra Logo" />
              </Box>
            </GridItem>
            <GridItem colSpan={[4, 4, 10, 10]}>
              <Box
                w="100%"
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                onClick={(e: any) => e.stopPropagation()}
              >
                {navigation.map((item: any) => {
                  return (
                    <Link
                      key={item.title}
                      href={item.path}
                      onClick={() => handleDrawer()}
                      className="link"
                    >
                      <Box
                        w="100%"
                        p="0px 10px"
                        transition="all .3s ease-in"
                        _hover={{
                          bg: "primary.500",
                          padding: "0px 10px",
                          borderColor: "primary.500",
                        }}
                      >
                        <Text
                          variant="MDBOLD"
                          textTransform="uppercase"
                          cursor="pointer"
                        >
                          {item.title}
                        </Text>
                      </Box>
                    </Link>
                  );
                })}
                <motion.div
                  whileHover={{
                    rotate: "180deg",
                    transition: { duration: 0.4 },
                  }}
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
                    position="relative"
                    onClick={() => handleDrawer()}
                    className="link"
                  >
                    <TfiClose fontSize="20px" color="black" />
                  </Box>
                </motion.div>
              </Box>
            </GridItem>
          </Grid>
        </motion.aside>
      </Show>
      <Show below="lg">
        <DrawerResponsive isOpen={isOpen} handleDrawer={() => handleDrawer()} />
      </Show>
    </Backdrop>
  );
};

export default NavigationDrawer;
