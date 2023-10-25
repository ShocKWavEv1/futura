import Backdrop from "@/components/backdrop/backdrop";
import ShoppingCartContext from "@/context/shoppingCartContext";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Show,
  Text,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { ShoppingDrawerProps } from "./model";
import { patchRemove, patchRemoveAll } from "@/constants/constants";
import Toast from "@/components/toast/toast";
import PillStepper from "@/components/pillsStepper/pillsStepper";
import { getPriceSingleItem, getTotalPrices } from "@/constants/shoppingCart";
import { useRouter } from "next/router";
import ItemImage from "./itemImage/itemImage";

const ShoppingDrawer: React.FC<ShoppingDrawerProps> = ({
  isOpen,
  handleDrawer,
}) => {
  const {
    user_id,
    shoppingCart,
    handleRemoveItemShoppingCart,
    handleRemoveAllShoppingCart,
    handleShoppingDrawer,
  } = useContext(ShoppingCartContext);

  const [showToast, setShowToast] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>();
  const [isLoading, setLoader] = useState<boolean>(false);

  const router = useRouter();

  const toast = useToast();

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

  const handleToast = () => {
    setShowToast(true);
  };

  const handleLoader = () => {
    setLoader(!isLoading);
  };

  const handleRemove = (item: any) => {
    setShowToast(false);
    setLoader(false);
    setCurrentItem(item);
    patchRemove(
      shoppingCart,
      user_id,
      item,
      handleRemoveItemShoppingCart,
      handleToast,
      handleLoader,
      handleShoppingDrawer
    );
  };

  const handleRemoveAll = () => {
    setLoader(false);
    patchRemoveAll(
      user_id,
      handleShoppingDrawer,
      handleRemoveAllShoppingCart,
      handleLoader
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
        <Box
          w={["100vw", "85vw", "80vw", "50vw"]}
          h="68%"
          data-lenis-prevent
          overflowY="scroll"
        >
          {shoppingCart.map((item: any, index: any) => {
            return (
              <Grid
                key={item.slug.current}
                w="100%"
                templateColumns="repeat(12, 2fr)"
                p="25px"
                borderBottom="1px solid white"
              >
                <GridItem colSpan={[3, 3, 3, 3]}>
                  <ItemImage item={item} />
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
                      index={index}
                      currentItemQuantity={item.currentQuantity}
                      maxQuantity={item.maxQuantity}
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
                      {getPriceSingleItem(item)}
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
          h="22%"
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
                <Text variant="MDMEDIUM">
                  Total: {getTotalPrices(shoppingCart)}
                </Text>
              </Box>
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Text
                  variant="MDBOLD"
                  fontSize={["14px", "14px", "14px", "14px", "14px"]}
                  p="2px 10px"
                  borderRadius="25em"
                  cursor="pointer"
                  _hover={{ backgroundColor: "hsla(60,14%,95%,.1)" }}
                  onClick={() => handleRemoveAll()}
                >
                  Remover todo
                </Text>
              </Box>
            </Box>
            <Box w="100%" mt="10px">
              <Button
                mt={["8px", "8px", "15px", "15px"]}
                variant="white"
                size={["xs", "xs", "sm", "sm"]}
                w="100%"
                textTransform="uppercase"
                className="link"
                onClick={() => {
                  handleDrawer();
                  router.push("/resumen");
                }}
              >
                🔥 ¡Lo quiero! 🔥
              </Button>
            </Box>
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
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        exit={{ width: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        style={{
          backgroundColor: "black",
          position: "absolute",
          right: 0,
          height: "100vh",
          borderLeft: "1px solid white",
        }}
      >
        <Box
          w={["100vw", "85vw", "80vw", "50vw"]}
          h="auto"
          p="20px 25px"
          display="flex"
          flexDirection="row"
          borderBottom="1px solid white"
          position="relative"
        >
          <Show above="md">
            <Text variant={["XSREGULAR", "XSREGULAR", "XSMEDIUM", "XSBOLD"]}>
              ESTO NO ES UN CARRITO NADA MÁS ES PARA QUE TE DES UN QUEMÓN 🔥 DE
              CUANTO TE VA A SALIR EL CHISTECITO
            </Text>
          </Show>
          <Show below="md">
            <Text
              variant="MDBOLD"
              textDecoration="underline"
              cursor="pointer"
              onClick={() => handleDrawer()}
            >
              Cerrar
            </Text>
          </Show>
        </Box>
        {shoppingCart.length === 0 ? renderEmptyCart() : renderCart()}
      </motion.div>
    </Backdrop>
  );
};

export default ShoppingDrawer;
