import Image from "next/image";
import { SwiperProps } from "./model";

import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { useNextSanityImage as sanityImages } from "next-sanity-image";
import { createClient } from "@sanity/client";
import { breakpoints, filters } from "../../constants";
import { Box, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "@/context/shoppingCartContext";
import { cartExists } from "@/constants/constants";
import Toast from "@/components/toast/toast";

const SwiperCatalog: React.FC<SwiperProps> = ({
  products,
  currentFilter,
  handleFilter,
}) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>();

  const toast = useToast();

  const {
    user_id,
    shoppingCart,
    hasItems,
    handleShoppingCart,
    handleHasItems,
  } = useContext(ShoppingCartContext);

  useEffect(() => {
    if (swiper !== null) {
      swiper.slideTo(currentFilter.swiperId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter]);

  useEffect(() => {
    if (showToast) {
      toast({
        render: () => (
          <Toast
            title={`${currentItem.title} agregado al carrito`}
            status="success"
          />
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);

  const configuredSanityClient = createClient({
    projectId: "7fexp3pt",
    dataset: "production",
    useCdn: false,
  });

  const renderImage = (image: any) => {
    const imageProps: any = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  const handleCurrentItem = (activeIndex: number) => {
    if (activeIndex === 0) {
      handleFilter(filters[0]);
    } else if (activeIndex >= 1 && activeIndex < 3) {
      handleFilter(filters[1]);
    } else if (activeIndex >= 3 && activeIndex < 5) {
      handleFilter(filters[2]);
    } else if (activeIndex >= 5 && activeIndex < 10) {
      handleFilter(filters[3]);
    } else if (activeIndex >= 10 && activeIndex < 16) {
      handleFilter(filters[4]);
    } else if (activeIndex >= 16 && activeIndex < 20) {
      handleFilter(filters[5]);
    } else {
      handleFilter(filters[6]);
    }
  };

  const handleToast = () => {
    setShowToast(true);
  };

  const handleAddCart = (item: any) => {
    const { title, mainImage, slug, price, maxQuantity, maxDays, _id } = item;
    const newItem = {
      title,
      mainImage,
      slug,
      price,
      maxQuantity,
      maxDays,
      _key: _id,
    };
    setShowToast(false);
    setCurrentItem(newItem);
    cartExists(
      shoppingCart,
      user_id,
      newItem,
      hasItems,
      handleShoppingCart,
      handleToast,
      handleHasItems
    );
  };

  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      slidesPerView={3}
      onSwiper={(swiper: any) => {
        setSwiper(swiper);
      }}
      breakpoints={breakpoints}
      onSlideChange={(slide: any) => handleCurrentItem(slide.activeIndex)}
    >
      {products.map((item: any) => {
        return (
          <SwiperSlide key={item.slug}>
            <Box
              w="100%"
              shadow="lg"
              position="relative"
              cursor="pointer"
              onClick={() => handleAddCart(item)}
            >
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCatalog;
