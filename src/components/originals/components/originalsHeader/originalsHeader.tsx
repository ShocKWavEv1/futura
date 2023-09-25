import MotionAnimation from "@/components/motionAnimation/motionAnimation";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import originals from "../../../../../public/assets/logo/originals.png";

const OriginalsHeader: React.FC = () => {
  return (
    <Box
      w="100%"
      p={[
        "6rem 0rem 2rem 0rem",
        "7rem 0rem 2rem 0rem",
        "7rem 0rem 2rem 0rem",
        "7rem 0rem 2rem 0rem",
        "9rem 0rem 2rem 0rem",
      ]}
    >
      <Box w={["300px", "400px", "500px", "500px"]}>
        <MotionAnimation delay={0.2}>
          <Image priority src={originals} alt="Fvtvra Originals" />
        </MotionAnimation>
      </Box>
    </Box>
  );
};

export default OriginalsHeader;
