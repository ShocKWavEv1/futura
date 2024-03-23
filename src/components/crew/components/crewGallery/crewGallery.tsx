import React, { useState } from "react";
import { CrewGalleryProps } from "./model";
import { Box } from "@chakra-ui/react";
import CrewMember from "./crewMember/crewMember";
import CrewMemberModal from "./crewMemberModal/crewMemberModal";

const CrewGallery: React.FC<CrewGalleryProps> = ({ crew }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  console.log(crew);

  return (
    <Box w="100%" h="auto" mt="40px">
      {crew.map((item: any, index: number) => {
        return (
          <CrewMember
            key={item.name}
            crewMember={item}
            index={index}
            setModal={setModal}
          />
        );
      })}
      <CrewMemberModal modal={modal} crew={crew} />
    </Box>
  );
};

export default CrewGallery;
