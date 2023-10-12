import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { ItemImageProps } from "./model";
import { useNextSanityImage as sanityImages } from "next-sanity-image";
import { createClient } from "@sanity/client";

const ItemImage: React.FC<ItemImageProps> = ({ item }) => {
  const configuredSanityClient = createClient({
    projectId: "7fexp3pt",
    dataset: "production",
    useCdn: false,
  });

  const renderImage = (image: any) => {
    const imageProps: any = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  return (
    <Box w="100%" h="100%">
      <Image
        src={renderImage(item.mainImage)}
        alt={item.title}
        placeholder="blur"
        blurDataURL="https://my-company-images-prd.imgix.net/public/bg-desktop.png?auto=format&blur=200&px=24"
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          backgroundColor: "rgba(0,0,0,.6)",
        }}
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </Box>
  );
};

export default ItemImage;
