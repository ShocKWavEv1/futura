import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalPromos from "./modalPromos/modalPromos";

const HomeHero: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Box id="compact">
      <Heading variant={["H5BOLD", "H4BOLD", "H3BOLD", "H3BOLD"]}>
        Compact Movil
      </Heading>
      <Heading variant={["H5BOLD", "H4BOLD", "H3BOLD", "H3BOLD"]}>
        Grip & electric van
      </Heading>
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
          onClick={() => router.push("/compact-movil")}
        >
          ¿Que contiene?
        </Button>
        <Button
          ml="15px"
          shadow="2xl"
          size="xs"
          variant="white"
          onClick={() => setOpen(true)}
        >
          Promociones
        </Button>
      </Box>
      <ModalPromos isOpen={isOpen} handleModal={() => setOpen(false)} />
    </Box>
  );
};

export default HomeHero;
