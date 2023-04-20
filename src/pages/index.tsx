import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Reel from "@/components/reel/reel";
import VideoLetters from "@/components/videoLetters/videoLetters";
import MarqueeBanner from "@/components/marquee/marquee";
import Catalog from "@/components/catalog/catalog";
import HomeHero from "@/components/homeHero/homeHero";

export default function Home() {
  const [isReel, showReel] = useState<boolean>(false);

  const MarqueeCopies = [
    "Renta de equipo fácil",
    "Solo 3 requisitos",
    "Fvtvra esta de tu lado",
    "Hacemos sencillo",
    "Lo que siempre fue complicado",
    "Tienes toda nuestra atención",
    "Identificación vigente",
    "Comprobante domicilio",
    "Firma responsiva y listo",
  ];

  return (
    <Box w="100%" h="auto" p="3rem 5rem 0rem 5rem">
      <HomeHero />
      <VideoLetters handleReel={() => showReel(true)} />
      <Reel isReel={isReel} handleReel={() => showReel(false)} />
      <MarqueeBanner items={MarqueeCopies} />
      <Catalog />
    </Box>
  );
}
