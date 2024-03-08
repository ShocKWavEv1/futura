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
import {
  Box,
  Button,
  Heading,
  Show,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "@/context/shoppingCartContext";
import { cartExists } from "@/constants/constants";
import Toast from "@/components/toast/toast";
import { formatCurrency } from "@/constants/formatCurrency";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const SwiperCatalog: React.FC<SwiperProps> = ({
  products,
  currentFilter,
  handleFilter,
}) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [showToastSuccess, setShowToastSuccess] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>();

  const toast = useToast();

  const {
    user_id,
    shoppingCart,
    hasItems,
    handleShoppingCart,
    handleHasItems,
    handleShoppingDrawer,
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
            title={`${currentItem.title} ya en el cotizador`}
            status="error"
          />
        ),
      });
      setShowToast(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);

  useEffect(() => {
    if (showToastSuccess) {
      toast({
        render: () => (
          <Toast title={`Agregado - ${currentItem.title}`} status="success" />
        ),
      });
      setShowToastSuccess(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToastSuccess]);

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
    } else if (activeIndex >= 1 && activeIndex < 8) {
      handleFilter(filters[1]);
    } else if (activeIndex >= 7 && activeIndex < 22) {
      handleFilter(filters[2]);
    } else {
      handleFilter(filters[3]);
    } /*else if (activeIndex >= 25 && activeIndex < 32) {
      handleFilter(filters[4]);
    } else if (activeIndex === 32) {
      handleFilter(filters[5]);
    }
    else {
    handleFilter(filters[6]);
    }*/
  };

  const handleToast = () => {
    setShowToast(true);
  };

  const handleToastSuccess = () => {
    setShowToastSuccess(true);
  };

  const handleLoading = (val: boolean) => {
    setLoading(val);
  };

  const handleAddCart = (item: any) => {
    setShowToast(false);
    const { title, mainImage, slug, price, maxQuantity, maxDays, _id } = item;
    const newItem = {
      title,
      mainImage,
      slug,
      price,
      maxQuantity,
      maxDays,
      _key: _id,
      currentQuantity: 1,
      currentDays: 1,
    };
    setCurrentItem(newItem);
    cartExists(
      shoppingCart,
      user_id,
      newItem,
      hasItems,
      handleShoppingCart,
      handleToast,
      handleToastSuccess,
      handleHasItems,
      handleLoading,
      handleShoppingDrawer
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
      freeMode
      onSlideChange={(slide: any) => handleCurrentItem(slide.activeIndex)}
    >
      {products.map((item: any) => {
        return (
          <SwiperSlide key={item.slug}>
            <Box w="100%" shadow="lg" position="relative" cursor="pointer">
              <Box className="container">
                <Image
                  src={renderImage(item.mainImage)}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "relative",
                    borderRadius: 8,
                  }}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
                <Box className="overlay">
                  <Button
                    shadow="2xl"
                    size="xs"
                    variant="white"
                    isLoading={currentItem?.slug === item.slug && isLoading}
                    loadingText="Añadiendo"
                    onClick={() => handleAddCart(item)}
                    mb="30px"
                  >
                    Añadir al cotizador
                  </Button>
                </Box>
              </Box>
              <Box
                w="100%"
                pt="20px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Heading textAlign="center" variant={"H8BOLD"}>
                  {item.title}
                </Heading>
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="row"
                >
                  <Text pt="10px" variant="MDBOLD" textTransform="uppercase">
                    {formatCurrency(item.price)}
                  </Text>
                  <Box p="2px" borderRadius="2px" m="12px 0px 0px 10px">
                    <Text variant="XXSREGULAR" textTransform="uppercase">
                      10 horas
                    </Text>
                  </Box>
                </Box>
                <Show below="lg">
                  <Button
                    shadow="2xl"
                    size="xs"
                    variant="white"
                    mt="20px"
                    w="100%"
                    isLoading={currentItem?.slug === item.slug && isLoading}
                    loadingText="Añadiendo"
                    onClick={() => handleAddCart(item)}
                  >
                    Añadir al cotizador
                  </Button>
                </Show>
              </Box>
            </Box>
          </SwiperSlide>
        );
      })}
      <Box w="100%" mt="20px">
        <SimpleGrid columns={[2, 2, 2, 2]} spacing="20px">
          <Box
            w="auto"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            p="20px 0px"
          >
            <Text
              variant="SMBOLD"
              cursor="pointer"
              onClick={() => swiper.slidePrev()}
              transition="all .3s ease-in"
              padding="12px"
              display="flex"
              bg="primary.500"
              _hover={{ bg: "primary.500", padding: "10px 15px" }}
              className="link"
            >
              <span style={{ margin: "4.5px 7px 0px 0px" }}>
                <TfiAngleLeft />
              </span>
              Anterior
            </Text>
          </Box>
          <Box
            w="auto"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            p="10px 0px"
          >
            <Text
              variant="SMBOLD"
              cursor="pointer"
              onClick={() => swiper.slideNext()}
              transition="all .3s ease-in"
              padding="12px"
              display="flex"
              bg="primary.500"
              _hover={{
                bg: "primary.500",
                padding: "10px 15px",
              }}
              className="link"
            >
              Siguiente
              <span style={{ margin: "4.5px 0px 0px 7px" }}>
                <TfiAngleRight />
              </span>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Swiper>
  );
};

export default SwiperCatalog;
