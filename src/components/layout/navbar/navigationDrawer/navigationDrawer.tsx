import Backdrop from "@/components/backdrop/backdrop";
import React from "react";
import { motion } from "framer-motion";
import { NavigationDrawerProps } from "./model";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import Image from "next/image";
import fvtvra_red from "../../../../../public/assets/logo/fvtvra_red.svg";
import { TfiClose } from "react-icons/tfi";
import { navigation } from "./constants";

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  handleDrawer,
}) => {
  return (
    <Backdrop
      isOpen={isOpen}
      handleBackdrop={() => handleDrawer()}
      type="drawer"
    >
      <motion.aside
        initial={{ height: 0 }}
        animate={{ height: "120px" }}
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
          <GridItem colSpan={[4, 4, 4, 2]}>
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Image priority src={fvtvra_red} alt="Fvtvra Logo" width={160} />
            </Box>
          </GridItem>
          <GridItem colSpan={[4, 4, 4, 10]}>
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pl="20px"
            >
              {navigation.map((item: any) => {
                return (
                  <Heading key={item.title} variant="H8BOLD" cursor="pointer">
                    {item.title}
                  </Heading>
                );
              })}
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
            </Box>
          </GridItem>
        </Grid>
      </motion.aside>
    </Backdrop>
  );
};

export default NavigationDrawer;
