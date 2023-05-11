import { Box } from "@chakra-ui/react";
import React from "react";
import OriginalsHeader from "./components/originalsHeader/originalsHeader";

const Originals: React.FC = () => {
  return (
    <Box w="100%" pb="5rem">
      <OriginalsHeader />
    </Box>
  );
};

export default Originals;
