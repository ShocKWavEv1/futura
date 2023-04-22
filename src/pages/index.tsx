import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Reel from "@/components/reel/reel";
import VideoLetters from "@/components/videoLetters/videoLetters";
import MarqueeBanner from "@/components/marquee/marquee";
import Catalog from "@/components/catalog/catalog";
import HomeHero from "@/components/homeHero/homeHero";

export default function Home({ products }: { products: any }) {
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
    <Box w="100%" h="auto" p="4rem 4rem 0rem 4rem">
      <HomeHero />
      <VideoLetters handleReel={() => showReel(true)} />
      <Reel isReel={isReel} handleReel={() => showReel(false)} />
      <MarqueeBanner items={MarqueeCopies} />
      <Catalog products={products} />
    </Box>
  );
}

export const getServerSideProps = async (pageContext: any) => {
  const query = encodeURIComponent(
    `*[ _type == "products" ] | order(_createdAt asc)`
  );

  const url = `https://7fexp3pt.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        products: [],
      },
    };
  } else {
    return {
      props: {
        products: result.result,
      },
    };
  }
};
