import { ReelProps } from "./model";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Backdrop from "../backdrop/backdrop";
import { Box } from "@chakra-ui/react";

const Reel: React.FC<ReelProps> = ({ isReel, handleReel }) => {
  return (
    <Backdrop isOpen={isReel} handleBackdrop={() => handleReel()} type="modal">
      <Box w="70vw" h="40vw">
        {isReel ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.5 }}
            style={{ width: "100%", height: "100%", border: "1px solid black" }}
          >
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://vimeo.com/703833524"
              controls
              className="react-player"
              style={{ backgroundColor: "black" }}
            />
          </motion.div>
        ) : null}
      </Box>
    </Backdrop>
  );
};

export default Reel;
