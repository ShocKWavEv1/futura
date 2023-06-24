/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import CrewHeader from "./components/crewHeader/crewHeader";
import CrewScroll from "./components/crewScroll/crewScroll";
import { CrewProps } from "./model";

const InGaffer: React.FC<CrewProps> = ({ crew }) => {
  return (
    <Box w="100%">
      <CrewScroll crew={crew} />
    </Box>
  );
};

export default InGaffer;
