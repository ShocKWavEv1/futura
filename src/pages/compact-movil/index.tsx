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
import { contains } from "../../constants/compact";

const CompactMovil: React.FC = () => {
  return (
    <Box w="100%">
      <Heading
        textAlign="center"
        variant={["H6BOLD", "H5BOLD", "H3BOLD", "H3BOLD"]}
      >
        1/2 Ton Grip & Electric Van
      </Heading>
      <Box
        w="100%"
        pt="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          shadow="2xl"
          size="sm"
          colorScheme="primary"
          onClick={() => alert("descarga")}
        >
          Descargar lista de equipo
        </Button>
      </Box>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        mt="20px"
        p={["0 0rem", "0 0rem", "0 0rem", "0 0rem"]}
      >
        <Accordion allowMultiple w="100%">
          {contains.map((item: any) => {
            return (
              <AccordionItem key={item.title} border="none">
                <h2>
                  <AccordionButton p="2rem 0rem">
                    <Box flex="1" textAlign="left">
                      <Heading
                        variant={["H7BOLD", "H7BOLD", "H6BOLD", "H6BOLD"]}
                      >
                        <Text as="span" color="brand.primary" mr="20px">
                          <span style={{ color: "#B53145" }}>X</span>
                        </Text>
                        {item.title}
                      </Heading>
                    </Box>
                    <AccordionIcon
                      fontSize={["40px", "40px", "40px", "70px"]}
                    />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {item.data.map((bullet: any) => {
                    return (
                      <Text key={bullet} variant="SMREGULAR" my="20px">
                        • {bullet}
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
