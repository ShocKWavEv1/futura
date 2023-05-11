/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text } from "@chakra-ui/react";
import InGafferHeader from "./components/ingafferHeader/ingafferHeader";
import { InGafferHeaderProps } from "./model";
import { motion } from "framer-motion";
import { TfiControlPlay } from "react-icons/tfi";

const InGaffer: React.FC<InGafferHeaderProps> = ({ handleReel }) => {
  return (
    <Box w="100%">
      <InGafferHeader />
      <Box
        mt="10px"
        w="100%"
        h="40vw"
        borderRadius="8px"
        cursor="pointer"
        position="relative"
        className="reel-bg"
      >
        <Box
          w="100%"
          h="40vw"
          position="absolute"
          zIndex={1}
          bg="rgba(0,0,0,.4)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          <motion.div whileHover={{ scale: 0.8 }}>
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
            >
              <Text variant="SMREGULAR">Nuestro</Text>
              <Box
                mx="15px"
                onClick={() => handleReel()}
                w="120px"
                h="120px"
                color={"black"}
                fontSize="40px"
                bg="white"
                borderRadius="55em"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <TfiControlPlay />
              </Box>
              <Text variant="SMREGULAR">Reel</Text>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default InGaffer;
