import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const HomeHero: React.FC = () => {
  const router = useRouter();
  return (
    <Box>
      <Heading variant="H3BOLD">Compact Movil</Heading>
      <Heading variant="H3BOLD">Grip & electric van</Heading>
      <Box
        w="100%"
        mt="30px"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Button
          shadow="2xl"
          size="xs"
          colorScheme="primary"
          onClick={() => router.push("/nosotros")}
        >
          ¿Que contiene?
        </Button>
        <Button ml="15px" shadow="2xl" size="xs" variant="white">
          Promociones
        </Button>
      </Box>
    </Box>
  );
};

export default HomeHero;
