import { Box } from "@chakra-ui/react";
import React from "react";
import OriginalsHeader from "./components/originalsHeader/originalsHeader";
import { OriginalsProps } from "./model";

const Originals: React.FC<OriginalsProps> = ({ originals }) => {
  console.log(originals);
  return (
    <Box w="100%" pb="3rem">
      <OriginalsHeader />
      <Box w="100%" h="40vw" bg="primary.500" borderRadius="8px"></Box>
    </Box>
  );
};

export default Originals;
