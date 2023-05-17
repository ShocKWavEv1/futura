import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { TabsOriginalsProps } from "./model";
import ListProjects from "../listProjects/listProjects";

const Tabs: React.FC<TabsOriginalsProps> = ({ originals }) => {
  const [currentTab, setCurrentTab] = useState(originals[0]);

  return (
    <Box w="100%" display="flex" flexDirection="column">
      <Box
        w="100%"
        h="auto"
        mt="0px"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="column"
      >
        {currentTab.videos.map((item: any) => {
          return <ListProjects key={item.chapter} listProjects={item} />;
        })}
      </Box>
    </Box>
  );
};

export default Tabs;
