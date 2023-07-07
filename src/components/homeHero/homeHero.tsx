import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalPromos from "./modalPromos/modalPromos";
import MotionAnimation from "../motionAnimation/motionAnimation";

const HomeHero: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Box id="compact">
      <MotionAnimation delay={0}>
        <Heading
          className="derpazoid"
          variant={["H5BOLD", "H4BOLD", "H3BOLD", "H3BOLD"]}
        >
          Compact Movil
        </Heading>
      </MotionAnimation>
      <MotionAnimation delay={0.4}>
        <Heading variant={["H5BOLD", "H4BOLD", "H3BOLD", "H3BOLD"]}>
          Grip & electric van
        </Heading>
      </MotionAnimation>
      <Box
        w="100%"
        mt="30px"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <MotionAnimation delay={0.6}>
          <Button
            shadow="2xl"
            size="xs"
            className="view"
            variant="white"
            onClick={() => router.push("/compact-movil")}
          >
            ¿Que contiene?
          </Button>
        </MotionAnimation>
        <MotionAnimation delay={0.8}>
          <Button
            ml="15px"
            shadow="2xl"
            size="xs"
            variant="white"
            onClick={() => setOpen(true)}
          >
            Promociones
          </Button>
        </MotionAnimation>
      </Box>
      <ModalPromos isOpen={isOpen} handleModal={() => setOpen(false)} />
    </Box>
  );
};

export default HomeHero;
