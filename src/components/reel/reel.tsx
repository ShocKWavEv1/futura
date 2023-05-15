import { ReelProps } from "./model";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Backdrop from "../backdrop/backdrop";
import { Box, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "@/context/shoppingCartContext";

const Reel: React.FC<ReelProps> = () => {
  const [isLoading, setLoading] = useState(true);

  const { isReel, urlVideo, handleReelVideo } = useContext(ShoppingCartContext);

  useEffect(() => {
    setLoading(true);
    if (isReel) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      setLoading(false);
    }
  }, [isReel]);

  return (
    <Backdrop
      isOpen={isReel}
      handleBackdrop={() => handleReelVideo(false, "")}
      type="modal"
    >
      <Box
        w="70vw"
        h="40vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {isReel && !isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.7 }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ReactPlayer
              width="100%"
              height="100%"
              url={urlVideo}
              controls
              className="react-player"
              style={{ backgroundColor: "black" }}
            />
          </motion.div>
        ) : (
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary.500"
            size="xl"
          />
        )}
      </Box>
    </Backdrop>
  );
};

export default Reel;
