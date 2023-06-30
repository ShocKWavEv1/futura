import { Box, Heading } from "@chakra-ui/react";
import { ModalProps } from "./model";
import { motion } from "framer-motion";
import { filters } from "../../constants";
import Backdrop from "@/components/backdrop/backdrop";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleModal,
  handleCurrentFilter,
}) => {
  return (
    <Backdrop isOpen={isOpen} handleBackdrop={() => handleModal()} type="modal">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "auto",
          backgroundColor: "black",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 3,
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        <Box w={["80vw", "80vw", "70vw", "50vw"]} h="100%">
          {filters.map((item: any) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: item.delay,
                }}
              >
                <Box
                  key={item.title}
                  cursor="pointer"
                  className="link"
                  onClick={() => {
                    handleCurrentFilter(item);
                    handleModal();
                  }}
                  p="20px 0px"
                  transition="all .3s ease-in"
                  _hover={{
                    bg: "primary.500",
                    p: "20px 10px",
                    borderColor: "primary.500",
                  }}
                >
                  <Heading variant={["H8BOLD", "H7BOLD", "H6BOLD", "H6BOLD"]}>
                    {item.title}
                  </Heading>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
