import Backdrop from "@/components/backdrop/backdrop";
import { formatCurrency } from "@/constants/formatCurrency";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { ModalVideoProps } from "./model";

const ModalVideo: React.FC<ModalVideoProps> = ({ isOpen, handleModal }) => {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 3,
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        <Box w={["80vw", "80vw", "70vw", "90vw"]}>
          <video
            controls={false}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            width="100%"
            height="100%"
          >
            <source src="assets/media/van.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export default ModalVideo;
