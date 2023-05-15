import { Box } from "@chakra-ui/react";
import React from "react";
import OriginalsHeader from "./components/originalsHeader/originalsHeader";
import Tabs from "./components/tabs/tabs";
import { OriginalsProps } from "./model";

const Originals: React.FC<OriginalsProps> = ({ originals }) => {
  return (
    <Box id="originals" w="100%" pb="3rem">
      <OriginalsHeader />
      <Box w="100%">
        <Tabs originals={originals} />
      </Box>
    </Box>
  );
};

export default Originals;
