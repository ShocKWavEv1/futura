import Image from "next/image";
import { SwiperProps } from "./model";

import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { useNextSanityImage as sanityImages } from "next-sanity-image";
import { createClient } from "@sanity/client";
import { breakpoints } from "../../constants";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SwiperCatalog: React.FC<SwiperProps> = ({ products, currentFilter }) => {
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper !== null) {
      swiper.slideTo(currentFilter.swiperId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter]);

  const configuredSanityClient = createClient({
    projectId: "7fexp3pt",
    dataset: "production",
    useCdn: true,
  });

  const renderImage = (image: any) => {
    const imageProps: any = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      slidesPerView={3}
      onSwiper={(swiper: any) => setSwiper(swiper)}
      breakpoints={breakpoints}
    >
      {products.map((item: any) => {
        return (
          <SwiperSlide key={item.slug}>
            <Box w="100%" shadow="lg" position="relative" cursor="pointer">
              <Image
                src={renderImage(item.mainImage)}
                alt={item.title}
                placeholder="blur"
                blurDataURL="https://my-company-images-prd.imgix.net/public/bg-desktop.png?auto=format&blur=200&px=24"
                style={{
                  width: "100%",
                  height: "auto",
                  zIndex: -99999,
                  position: "relative",
                  borderRadius: 8,
                  backgroundColor: "rgba(0,0,0,.6)",
                }}
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </Box>
            <Box w="100%" h="90vh" position="absolute" bg="red">
              Hiiii
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCatalog;
