import { Box, Heading } from "@chakra-ui/react";

const CrewHeader: React.FC = () => {
  return (
    <Box id="crew" w="100%" p="9rem 0rem 2rem 0rem">
      <Heading variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}>
        Fvtvra Crew
      </Heading>
    </Box>
  );
};

export default CrewHeader;
