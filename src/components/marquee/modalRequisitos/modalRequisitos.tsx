import Backdrop from "@/components/backdrop/backdrop";
import { ModalRequisitosProps } from "./model";
import { motion } from "framer-motion";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { require } from "./constants";

const ModalRequisitos: React.FC<ModalRequisitosProps> = ({
  isOpen,
  handleModal,
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
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 3,
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        <Box w={["80vw", "80vw", "70vw", "60vw"]} h="100%">
          {require.map((item: any, i: number) => {
            return (
              <Box key={item} w="100%">
                <Heading variant="H7BOLD" p="10px 0px">
                  <span style={{ color: "#B53145", paddingRight: "10px" }}>
                    X
                  </span>
                  {item}
                </Heading>
              </Box>
            );
          })}
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export default ModalRequisitos;
