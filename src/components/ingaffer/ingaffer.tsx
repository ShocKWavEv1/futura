/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import InGafferHeader from "./components/ingafferHeader/ingafferHeader";
import { InGafferHeaderProps } from "./model";
import { useContext } from "react";
import ShoppingCartContext from "@/context/shoppingCartContext";
import MotionAnimation from "../motionAnimation/motionAnimation";
import { basePadding } from "@/constants/basePadding";

const InGaffer: React.FC<InGafferHeaderProps> = () => {
  const { handleReelVideo } = useContext(ShoppingCartContext);
  return (
    <Box id="reel" w="100%">
      <Box w="100%" p={basePadding()}>
        <InGafferHeader />
      </Box>
      <MotionAnimation delay={0.4}>
        <Box
          mt="20px"
          w="100%"
          borderRadius="8px"
          cursor="pointer"
          position="relative"
          className="reel-bg"
        >
          <video
            controls={false}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            width="100%"
            height="100%"
          >
            <source src="assets/media/fvtvra_reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </MotionAnimation>
    </Box>
  );
};

export default InGaffer;
