import { Box } from "@chakra-ui/react";
import React from "react";
import ReelsHeader from "./components/ReelsHeader/reelsHeader";

const ReelsIg: React.FC = () => {
  return (
    <Box id="reels" w="100%" pb="3rem">
      <ReelsHeader />
    </Box>
  );
};

export default ReelsIg;
