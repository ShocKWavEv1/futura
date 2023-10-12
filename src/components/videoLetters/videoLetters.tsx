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
          <video
            src="https://videos.ctfassets.net/mq81gy7w2znw/6w4zLGGSLzp0D9jv0R9WLL/cd41a8f121a48b4d9a74f1a731d067db/header_vid_-_1080_v3.m4v#t=0.1"
            loop
            autoPlay
            muted
          ></video>
          <div className="video-copy">
            <Heading fontSize="32.5vw">MOVIL</Heading>
          </div>
        </Box>
      </MotionAnimation>
    </Box>
  );
};

export default VideoLetters;
