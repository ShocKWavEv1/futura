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
import PillStepper from "@/components/pillsStepper/pillsStepper";

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
        <Heading mt="-80px" variant={["H7BOLD", "H7BOLD", "H6BOLD", "H6BOLD"]}>
          Carrito vacío
        </Heading>
      </Box>
    );
  };

  const renderCart = () => {
    return (
      <>
        <Box w={["100vw", "85vw", "65vw", "45vw"]} h="70%" overflowY="scroll">
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
                  <Box
                    w="100%"
                    pl="20px"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Heading variant="H8BOLD" m="0px">
                      {item.title}
                    </Heading>
                    <PillStepper
                      quantity={1}
                      maxQuantity={30}
                      handleQuantity={() => console.log("derp")}
                    />
                  </Box>
                </GridItem>
                <GridItem colSpan={[2, 2, 2, 2]} h="100%">
                  <Box w="100%" h="50%">
                    <Text
                      variant={[
                        "XSREGULAR",
                        "XSREGULAR",
                        "MDREGULAR",
                        "MDREGULAR",
                      ]}
                      textAlign="right"
                    >
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
        <Box
          w="100%"
          h="20%"
          borderTop="1px solid white"
          p={["10px 25px", "10px 25px", "15px 25px", "15px 25px"]}
        >
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
          >
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
            <Button
              mt={["8px", "8px", "15px", "15px"]}
              variant="white"
              size={["xs", "xs", "sm", "sm"]}
              w="100%"
              textTransform="uppercase"
            >
              Enviar cotización
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
        animate={{ width: "auto" }}
        style={{
          backgroundColor: "black",
          position: "absolute",
          right: 0,
          height: "100vh",
          borderLeft: "1px solid white",
        }}
      >
        <Box
          w={["100vw", "85vw", "65vw", "45vw"]}
          h="auto"
          p="20px 25px"
          display="flex"
          flexDirection="row"
          borderBottom="1px solid white"
        >
          <Text variant={["XSREGULAR", "XSREGULAR", "XSMEDIUM", "XSBOLD"]}>
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
