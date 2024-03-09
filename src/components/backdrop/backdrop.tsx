import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BackdropProps } from "./model";
import { Box } from "@chakra-ui/react";
import { TfiClose } from "react-icons/tfi";
import { useScrollLock } from "@/hooks/useScrollLock";

const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  handleBackdrop,
  children,
  type,
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const renderCloseButton = () => {
    return (
      <Box
        w="100%"
        h="auto"
        zIndex={4}
        top={["3.5%", "2.5%", "2.5%", "2.5%", "2.5%"]}
        p={["0rem 1.5rem", "0rem 1.5rem", "0rem 2rem", "0rem 3rem"]}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <motion.div
          whileHover={{ rotate: "180deg", transition: { duration: 0.4 } }}
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
            onClick={() => handleBackdrop()}
            className="link"
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
        backgroundColor: "rgba(0,0,0,.75)",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 6,
        display: isOpen ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {type === "drawer" ? null : renderCloseButton()}
      {children}
    </motion.div>
  );
};

export default Backdrop;
