import Backdrop from "@/components/backdrop/backdrop";
import { formatCurrency } from "@/constants/formatCurrency";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { promos } from "./constants";
import { ModalPromosProps } from "./model";

const ModalPromos: React.FC<ModalPromosProps> = ({ isOpen, handleModal }) => {
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
        <Box w={["80vw", "80vw", "70vw", "40vw"]} h="100%">
          <SimpleGrid columns={[1, 1, 1, 1]} spacing="20px">
            {promos.map((item: any) => {
              return (
                <Box
                  key={item.price}
                  w="100%"
                  border="1px solid white"
                  p="25px"
                  borderRadius="8px"
                >
                  <Heading variant="H6BOLD">
                    {item.price === ""
                      ? item.price
                      : formatCurrency(item.price)}
                  </Heading>
                  <Text mt="10px" variant="SMREGULAR">
                    <span style={{ color: "#B53145" }}>{item.promo}</span>
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export default ModalPromos;
