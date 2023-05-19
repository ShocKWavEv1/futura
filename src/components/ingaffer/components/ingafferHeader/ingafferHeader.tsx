import MotionAnimation from "@/components/motionAnimation/motionAnimation";
import { Box, Heading } from "@chakra-ui/react";

const InGafferHeader: React.FC = () => {
  return (
    <Box w="100%" p="9rem 0rem 2rem 0rem">
      <MotionAnimation delay={0.2}>
        <Heading variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}>
          Nuestro Reel
        </Heading>
      </MotionAnimation>
    </Box>
  );
};

export default InGafferHeader;
