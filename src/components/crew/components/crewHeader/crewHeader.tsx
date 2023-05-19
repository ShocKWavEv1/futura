import MotionAnimation from "@/components/motionAnimation/motionAnimation";
import { Box, Heading } from "@chakra-ui/react";

const CrewHeader: React.FC = () => {
  return (
    <Box id="crew" w="100%" p="9rem 0rem 2rem 0rem">
      <MotionAnimation delay={0.2}>
        <Heading variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}>
          Fvtvra Crew
        </Heading>
      </MotionAnimation>
    </Box>
  );
};

export default CrewHeader;
