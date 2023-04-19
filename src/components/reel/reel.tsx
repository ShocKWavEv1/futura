import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { ReelProps } from "./model";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const Reel: React.FC<ReelProps> = ({ isReel, handleReel }) => {
  return (
    <Drawer
      isOpen={isReel}
      placement="bottom"
      onClose={() => handleReel()}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color="white" fontSize="20px" />
        <DrawerBody bg="black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
            }}
          >
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://vimeo.com/703833524"
              controls
              style={{ backgroundColor: "black" }}
            />
          </motion.div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Reel;
