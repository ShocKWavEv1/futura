import { createClient } from "@sanity/client";
import { useNextSanityImage as sanityImages } from "next-sanity-image";
import Image from "next/image";

export default function BlurredImage(image: any, alt: any) {
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
    <Image
      src={renderImage(image)}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        position: "relative",
        borderRadius: 8,
      }}
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
}
