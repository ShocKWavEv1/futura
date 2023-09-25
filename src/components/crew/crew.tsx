/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import CrewHeader from "./components/crewHeader/crewHeader";
import { CrewProps } from "./model";
import CrewScroll from "./components/crewScroll/crewScroll";

const InGaffer: React.FC<CrewProps> = ({ crew }) => {
  return (
    <Box w="100%">
      <CrewHeader />
      <CrewScroll crew={crew} />
    </Box>
  );
};

export default InGaffer;
