import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalPromos from "./modalPromos/modalPromos";
import MotionAnimation from "../motionAnimation/motionAnimation";
import { basePadding } from "@/constants/basePadding";
import Link from "next/link";
import ModalVideo from "./modalVideo/modalVideo";

const HomeHero: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isVideo, setVideo] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Box id="compact" p={basePadding()}>
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
        <Stack
          direction={["column", "column", "row", "row", "row"]}
          spacing="15px"
        >
          <Box w="auto" display="flex" flexDirection="row">
            <MotionAnimation delay={0.6}>
              <Button
                shadow="2xl"
                size="xs"
                className="view"
                variant="white"
                onClick={() => setVideo(true)}
              >
                ¿Que contiene?
              </Button>
            </MotionAnimation>
            <MotionAnimation delay={0.65}>
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
          <MotionAnimation delay={0.7}>
            <Link
              href="https://drive.google.com/file/d/1ulXsvc8qWVqcd35KQQdiTeU5pa0AcFJm/view"
              target="_blank"
            >
              <Button shadow="2xl" size="xs" colorScheme="primary">
                Lista de equipo
              </Button>
            </Link>
          </MotionAnimation>
        </Stack>
      </Box>
      <ModalPromos isOpen={isOpen} handleModal={() => setOpen(false)} />
      <ModalVideo isOpen={isVideo} handleModal={() => setVideo(false)} />
    </Box>
  );
};

export default HomeHero;
