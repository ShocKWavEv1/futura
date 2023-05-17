import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { TabsOriginalsProps } from "./model";
import ListProjects from "../listProjects/listProjects";

const Tabs: React.FC<TabsOriginalsProps> = ({ originals }) => {
  const [currentTab, setCurrentTab] = useState(originals[0]);

  return (
    <Box w="100%" display="flex" flexDirection="column">
      <Heading variant={["H5BOLD", "H5BOLD", "H5BOLD", "H4BOLD"]}>
        {currentTab.name}
      </Heading>
      <Box
        w="100%"
        h="auto"
        mt="40px"
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
