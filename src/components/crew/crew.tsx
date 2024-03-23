/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import CrewHeader from "./components/crewHeader/crewHeader";
import { CrewProps } from "./model";
import { basePadding } from "@/constants/basePadding";
import CrewGallery from "./components/crewGallery/crewGallery";

const InGaffer: React.FC<CrewProps> = ({ crew }) => {
  return (
    <Box w="100%" p={basePadding()}>
      <CrewHeader />
      <CrewGallery crew={crew} />
    </Box>
  );
};

export default InGaffer;
