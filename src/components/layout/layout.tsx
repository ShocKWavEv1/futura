import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";

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
      <Box w="100%" h="10vh" backgroundColor="hotpink"></Box>
    </Box>
  );
};

export default Layout;
