import { Box } from "@chakra-ui/react";
import VideoLetters from "@/components/videoLetters/videoLetters";
import MarqueeBanner from "@/components/marquee/marquee";
import Catalog from "@/components/catalog/catalog";
import HomeHero from "@/components/homeHero/homeHero";
import InGaffer from "@/components/ingaffer/ingaffer";
import Crew from "@/components/crew/crew";
import Originals from "@/components/originals/originals";
import ReelsIg from "@/components/reelsIg/reelsIg";

export default function Home({
  products,
  crew,
  originals,
}: {
  products: any;
  crew: any;
  originals: any;
}) {
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
    <Box>
      <HomeHero />
      <VideoLetters />
      <MarqueeBanner items={MarqueeCopies} />
      <Catalog products={products} />
      <InGaffer />
      <Crew crew={crew} />
      <Originals originals={originals} />
      <ReelsIg />
    </Box>
  );
}

export const getServerSideProps = async (pageContext: any) => {
  const query = encodeURIComponent(
    `*[ _type == "products" ] | order(_createdAt asc)`
  );

  const queryCrew = encodeURIComponent(
    `*[ _type == "crew" ] | order(_createdAt asc)`
  );

  const queryOriginals = encodeURIComponent(
    `*[ _type == "originals" ] | order(_createdAt asc)`
  );

  const url = `https://7fexp3pt.api.sanity.io/v1/data/query/production?query=${query}`;

  const urlCrew = `https://7fexp3pt.api.sanity.io/v1/data/query/production?query=${queryCrew}`;

  const urlOriginals = `https://7fexp3pt.api.sanity.io/v1/data/query/production?query=${queryOriginals}`;

  const result = await fetch(url).then((res) => res.json());

  const resultCrew = await fetch(urlCrew).then((res) => res.json());

  const resultOriginals = await fetch(urlOriginals).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        products: [],
        crew: [],
        originals: [],
      },
    };
  } else {
    return {
      props: {
        products: result.result,
        crew: resultCrew.result,
        originals: resultOriginals.result,
      },
    };
  }
};
