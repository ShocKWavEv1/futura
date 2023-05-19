import MotionAnimation from "@/components/motionAnimation/motionAnimation";
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
import Link from "next/link";
import { contains } from "../../constants/compact";

const CompactMovil: React.FC = () => {
  return (
    <Box w="100%">
      <MotionAnimation delay={0.2}>
        <Heading
          textAlign="center"
          variant={["H6BOLD", "H5BOLD", "H3BOLD", "H3BOLD"]}
        >
          1/2 Ton Grip & Electric Van
        </Heading>
      </MotionAnimation>
      <MotionAnimation delay={0.4}>
        {" "}
        <Box
          w="100%"
          pt="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link
            href="https://drive.google.com/file/d/1ulXsvc8qWVqcd35KQQdiTeU5pa0AcFJm/view"
            target="_blank"
          >
            <Button shadow="2xl" size="sm" colorScheme="primary">
              Descargar lista de equipoooo
            </Button>
          </Link>
        </Box>
      </MotionAnimation>
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
              <MotionAnimation key={item.title} delay={0.6}>
                <AccordionItem border="none">
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
              </MotionAnimation>
            );
          })}
        </Accordion>
      </Box>
    </Box>
  );
};

export default CompactMovil;
