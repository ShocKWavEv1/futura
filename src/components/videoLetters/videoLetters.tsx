import ShoppingCartContext from "@/context/shoppingCartContext";
import { Box, Heading, Show } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import MotionAnimation from "../motionAnimation/motionAnimation";
import { VideoLettersProps } from "./model";

const VideoLetters: React.FC<VideoLettersProps> = () => {
  const { handleReelVideo } = useContext(ShoppingCartContext);

  return (
    <Box>
      <MotionAnimation delay={1}>
        <Box className="video-section">
          <video src="assets/media/drones.mp4" loop autoPlay muted></video>
          <div className="video-copy">
            <Heading fontSize="32.5vw">MOVIL</Heading>
          </div>
        </Box>
      </MotionAnimation>
    </Box>
  );
};

export default VideoLetters;
