import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import Reel from "@/components/reel/reel";
import VideoLetters from "@/components/videoLetters/videoLetters";

export default function Home() {
  const [isReel, showReel] = useState<boolean>(false);

  const router = useRouter();

  return (
    <Box w="100%" h="auto" p="3rem 5rem 5rem 5rem">
      <Heading variant="H3BOLD">Compact Movil</Heading>
      <Heading variant="H3BOLD">Grip & electric van</Heading>
      <Box
        w="100%"
        mt="20px"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Button
          onClick={() => router.push("/nosotros")}
          shadow="2xl"
          size="xs"
          colorScheme="primary"
        >
          ¿Que contiene?
        </Button>
        <Button ml="15px" shadow="2xl" size="xs" variant="white">
          Promociones
        </Button>
      </Box>
      <VideoLetters handleReel={() => showReel(true)} />
      <Reel isReel={isReel} handleReel={() => showReel(false)} />
    </Box>
  );
}
