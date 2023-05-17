import { Box, Heading } from "@chakra-ui/react";

const OriginalsHeader: React.FC = () => {
  return (
    <Box w="100%" p="9rem 0rem 2rem 0rem">
      <Heading variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}>
        Creaciones
      </Heading>
      <Heading variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}>
        Originales
      </Heading>
    </Box>
  );
};

export default OriginalsHeader;
