/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Show, Text } from "@chakra-ui/react";
import InGafferHeader from "./components/ingafferHeader/ingafferHeader";
import { InGafferHeaderProps } from "./model";
import { motion } from "framer-motion";
import { TfiControlPlay } from "react-icons/tfi";
import { useContext } from "react";
import ShoppingCartContext from "@/context/shoppingCartContext";

const InGaffer: React.FC<InGafferHeaderProps> = () => {
  const { handleReelVideo } = useContext(ShoppingCartContext);
  return (
    <Box id="reel" w="100%">
      <InGafferHeader />
      <Box
        mt="10px"
        w="100%"
        h={["100vw", "40vw", "40vw", "40vw"]}
        borderRadius="8px"
        cursor="pointer"
        position="relative"
        className="reel-bg"
      >
        <Box
          w="100%"
          h={["100vw", "40vw", "40vw", "40vw"]}
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
              <Show above="sm">
                <Text variant="SMREGULAR">Nuestro</Text>
              </Show>
              <Box
                mx="15px"
                onClick={() =>
                  handleReelVideo(true, "https://vimeo.com/703833524")
                }
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
              <Show above="sm">
                <Text variant="SMREGULAR">Reel</Text>
              </Show>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default InGaffer;
