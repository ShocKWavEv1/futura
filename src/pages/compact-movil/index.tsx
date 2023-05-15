import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { contains } from "./constants";

const CompactMovil: React.FC = () => {
  return (
    <Box w="100%">
      <Heading variant="H3BOLD">1/2 Ton Grip & Electric Van</Heading>
      <Box
        w="100%"
        mt="3rem"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        p="0 3rem"
      >
        <Accordion allowMultiple w="100%">
          {contains.map((item: any) => {
            return (
              <AccordionItem key={item.title} border="none">
                <h2>
                  <AccordionButton p="2rem 0rem">
                    <Box flex="1" textAlign="left">
                      <Heading variant="H5BOLD">
                        <Text as="span" color="brand.primary" mr="20px">
                          X
                        </Text>
                        {item.title}
                      </Heading>
                    </Box>
                    <AccordionIcon
                      fontSize={["20px", "30px", "40px", "70px"]}
                    />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {item.data.map((bullet: any) => {
                    return (
                      <Text key={bullet} variant="SMREGULAR" my="20px">
                        {bullet}
                      </Text>
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </Box>
  );
};

export default CompactMovil;