import React from "react";
import { motion } from "framer-motion";
import { DrawerResponsiveProps } from "./model";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { navigation } from "../constants";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import fvtvra_red from "../../../../../../public/assets/logo/fvtvra_red.svg";

const DrawerResponsive: React.FC<DrawerResponsiveProps> = ({
  isOpen,
  handleDrawer,
}) => {
  return (
    <motion.aside
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      style={{
        backgroundColor: "black",
        position: "absolute",
        top: 0,
        width: "100%",
        borderBottom: "1px solid white",
        padding: "2.6rem 3rem 3rem 3rem",
      }}
    >
      <Grid w="100%" templateColumns="repeat(12, 2fr)">
        <GridItem colSpan={[6, 6, 6, 6]}>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Image priority src={fvtvra_red} alt="Fvtvra Logo" width={170} />
          </Box>
        </GridItem>
        <GridItem colSpan={[6, 6, 6, 6]}>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
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
              >
                <TfiClose fontSize="20px" color="black" />
              </Box>
            </motion.div>
          </Box>
        </GridItem>
      </Grid>
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexDirection="column"
        onClick={(e: any) => e.stopPropagation()}
      >
        {navigation.map((item: any) => {
          return (
            <Link
              key={item.title}
              href={item.path}
              onClick={() => handleDrawer()}
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
                <Heading
                  variant={["H7BOLD", "H7BOLD", "H6BOLD", "H6BOLD"]}
                  cursor="pointer"
                >
                  {item.title}
                </Heading>
              </Box>
            </Link>
          );
        })}
      </Box>
    </motion.aside>
  );
};

export default DrawerResponsive;
