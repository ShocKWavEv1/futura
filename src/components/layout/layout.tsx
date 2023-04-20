import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w="100%"
      h="auto"
      bg={colorMode === "dark" ? "black" : "secondaryWhite"}
      position="relative"
      zIndex={0}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
