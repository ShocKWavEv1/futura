import React from "react";
import { motion } from "framer-motion";
import { BackdropProps } from "./model";
import { Box } from "@chakra-ui/react";
import { TfiClose } from "react-icons/tfi";

const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  handleBackdrop,
  children,
  type,
}) => {
  const renderCloseButton = () => {
    return (
      <Box
        w="100%"
        h="auto"
        zIndex={3}
        top="6%"
        p="0rem 3rem"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <motion.div
          whileHover={{ rotate: "180deg", transition: { duration: 0.4 } }}
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
            onClick={() => handleBackdrop()}
          >
            <TfiClose fontSize="20px" color="black" />
          </Box>
        </motion.div>
      </Box>
    );
  };
  return (
    <motion.div
      onClick={() => handleBackdrop()}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,.6)",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        display: isOpen ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "hidden",
      }}
    >
      {type === "drawer" ? null : renderCloseButton()}
      {children}
    </motion.div>
  );
};

export default Backdrop;
