import Backdrop from "@/components/backdrop/backdrop";
import ShoppingCartContext from "@/context/shoppingCartContext";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ShoppingDrawerProps } from "./model";
import { useNextSanityImage as sanityImages } from "next-sanity-image";
import { createClient } from "@sanity/client";
import { formatCurrency } from "@/constants/formatCurrency";
import { patchRemove } from "@/constants/constants";
import Toast from "@/components/toast/toast";

const ShoppingDrawer: React.FC<ShoppingDrawerProps> = ({
  isOpen,
  handleDrawer,
}) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>();

  const toast = useToast();

  const { user_id, shoppingCart, totalCart, handleRemoveItemShoppingCart } =
    useContext(ShoppingCartContext);

  const configuredSanityClient = createClient({
    projectId: "7fexp3pt",
    dataset: "production",
    useCdn: false,
  });

  useEffect(() => {
    if (showToast) {
      toast({
        render: () => (
          <Toast
            title={`${currentItem.title} removido del carrito`}
            status="success"
          />
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);

  const renderImage = (image: any) => {
    const imageProps: any = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  const handleToast = () => {
    setShowToast(true);
  };

  const handleRemove = (item: any) => {
    setShowToast(false);
    setCurrentItem(item);
    handleDrawer();
    patchRemove(
      shoppingCart,
      user_id,
      item,
      handleRemoveItemShoppingCart,
      handleToast
    );
  };

  const renderEmptyCart = () => {
    return (
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading mt="-80px" variant="H6BOLD">
          Carrito vacio
        </Heading>
      </Box>
    );
  };

  const renderCart = () => {
    return (
      <>
        <Box w="100%" h="68%" overflowY="scroll">
          {shoppingCart.map((item: any) => {
            return (
              <Grid
                key={item.slug.current}
                w="100%"
                templateColumns="repeat(12, 2fr)"
                p="25px"
                borderBottom="1px solid white"
              >
                <GridItem colSpan={[3, 3, 3, 3]}>
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
                </GridItem>
                <GridItem colSpan={[7, 7, 7, 7]} h="100%">
                  <Heading variant="H8BOLD" pl="20px">
                    {item.title}
                  </Heading>
                </GridItem>
                <GridItem colSpan={[2, 2, 2, 2]} h="100%">
                  <Box w="100%" h="50%">
                    <Text variant="MDREGULAR" textAlign="right">
                      {formatCurrency(item.price)}
                    </Text>
                  </Box>
                  <Box
                    w="100%"
                    h="50%"
                    display="flex"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    <Text
                      variant="XSREGULAR"
                      fontSize="12px"
                      p="2px 10px"
                      borderRadius="25em"
                      cursor="pointer"
                      _hover={{ backgroundColor: "hsla(60,14%,95%,.1)" }}
                      onClick={() => handleRemove(item)}
                    >
                      Remover
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            );
          })}
        </Box>
        <Box w="100%" h="22%" borderTop="1px solid white" p="25px">
          <Box w="100%" display="flex" flexDirection="row">
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Text variant="MDMEDIUM">Subtotal</Text>
            </Box>
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Text variant="MDMEDIUM">{formatCurrency(totalCart)}</Text>
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Button
              mt="18px"
              variant="white"
              size="sm"
              w="100%"
              textTransform="uppercase"
            >
              Enviar cotizacion
            </Button>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <Backdrop
      isOpen={isOpen}
      handleBackdrop={() => handleDrawer()}
      type="drawer"
    >
      <motion.aside
        onClick={(e) => e.stopPropagation()}
        initial={{ width: 0 }}
        animate={{ width: "45vw" }}
        style={{
          backgroundColor: "black",
          position: "absolute",
          right: 0,
          height: "100vh",
          borderLeft: "1px solid white",
        }}
      >
        <Box
          w="100%"
          h="auto"
          p="20px 25px"
          display="flex"
          flexDirection="row"
          borderBottom="1px solid white"
        >
          <Text variant="XSMEDIUM">
            ESTO NO ES UN CARRITO NADA MÁS ES PARA QUE TE DES UN QUEMÓN 🔥 DE
            CUANTO TE VA A SALIR EL CHISTECITO
          </Text>
        </Box>
        {shoppingCart.length === 0 ? renderEmptyCart() : renderCart()}
      </motion.aside>
    </Backdrop>
  );
};

export default ShoppingDrawer;