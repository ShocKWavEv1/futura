import { Box, Text } from "@chakra-ui/react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import React, { useState } from "react";
import { TabsOriginalsProps } from "./model";
import { useNextSanityImage as sanityImages } from "next-sanity-image";
import ListProjects from "../listProjects/listProjects";

const Tabs: React.FC<TabsOriginalsProps> = ({ originals }) => {
  const [currentTab, setCurrentTab] = useState(originals[0]);

  const configuredSanityClient = createClient({
    projectId: "7fexp3pt",
    dataset: "production",
    useCdn: false,
  });

  const renderImage = (image: any) => {
    const imageProps: any = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  return (
    <Box w="100%" display="flex" flexDirection="column">
      <Box
        w="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        {originals.map((item: any) => {
          return (
            <Box
              key={item.name}
              p="10px"
              borderBottom={
                item.name === currentTab.name
                  ? "2px solid white"
                  : "0px solid white"
              }
              cursor="pointer"
            >
              <Text variant="MDREGULAR">{item.name}</Text>
            </Box>
          );
        })}
      </Box>
      <Box
        w="100%"
        h="auto"
        mt="30px"
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
