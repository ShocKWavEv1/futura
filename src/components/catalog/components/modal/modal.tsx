import { Box, Heading } from "@chakra-ui/react";
import { ModalProps } from "./model";
import { motion } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import MarqueeBanner from "../../../marquee/marquee";
import { filters } from "../../constants";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleModal,
  handleCurrentFilter,
}) => {
  return (
    <motion.div
      onClick={() => handleModal()}
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
      }}
    >
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
          onClick={() => handleModal()}
        >
          <TfiClose fontSize="20px" color="black" />
        </Box>
      </Box>
      <Box
        w="50vw"
        h="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="black"
        shadow="2xl"
        p="1rem 2rem"
        zIndex={3}
        position="absolute"
        onClick={(e) => e.stopPropagation()}
      >
        <Box w="100%" h="100%">
          {filters.map((item: any) => {
            return (
              <Box
                key={item.title}
                my="40px"
                cursor="pointer"
                onClick={() => {
                  handleCurrentFilter(item);
                  handleModal();
                }}
              >
                <Heading variant="H5BOLD">{item.title}</Heading>
              </Box>
            );
          })}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Modal;
