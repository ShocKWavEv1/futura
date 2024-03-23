import React from "react";
import { CrewMemberProps } from "./model";
import { Box, Heading } from "@chakra-ui/react";

const CrewMember: React.FC<CrewMemberProps> = ({
  crewMember,
  index,
  setModal,
}) => {
  return (
    <Box
      w="100%"
      p={["20px", "20px", "30px", "30px"]}
      borderBottom="1px solid white"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <Heading
        variant={["H8REGULAR", "H8REGULAR", "H6REGULAR", "H7REGULAR"]}
        color="primary.500"
      >
        {crewMember.name}
      </Heading>
      <Heading
        variant={["H9REGULAR", "H9REGULAR", "H9REGULAR", "H9REGULAR"]}
        pt="10px"
      >
        {crewMember.role}
      </Heading>
    </Box>
  );
};

export default CrewMember;
