import ShoppingCartContext from "@/context/shoppingCartContext";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useNextSanityImage as sanityImages } from "next-sanity-image";
import { configuredSanityClient } from "@/constants/configureSanityClient";
import { getPriceSingleItem, getTotalPrices } from "@/constants/shoppingCart";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import Confetti from "react-confetti";
import { useWindowSize } from "@studio-freight/hamo";
import { basePadding } from "@/constants/basePadding";

const Resumen = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
  const [showConfetti, setConfetti] = useState(false);
  const [alias, setAlias] = useState();
  const [nameProject, setNameProject] = useState();

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => {
        setConfetti(false);
      }, 1000);
    }
  }, [showConfetti]);

  const renderImage = (image) => {
    const imageProps = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  const renderDynamicDates = (firstDate, secondDate) => {
    if (secondDate === undefined) {
      return `el dia *${firstDate?.getDate()}-${
        firstDate?.getMonth() + 1
      }-${firstDate?.getFullYear()}*`;
    } else {
      return `del dia *${firstDate?.getDate()}-${
        firstDate?.getMonth() + 1
      }-${firstDate?.getFullYear()}* al dia *${secondDate?.getDate()}-${
        secondDate?.getMonth() + 1
      }-${secondDate?.getFullYear()}*`;
    }
  };

  const handleList = () => {
    let stringData = shoppingCart.reduce((result, item, idx) => {
      return `${result} *${item?.title.toLocaleUpperCase(
        "en-US"
      )}* %0a •Unidades: ${
        item?.currentQuantity
      } %0a •Subtotal: ${getPriceSingleItem(item)}mxn %0a`;
    }, "");

    const firstDate = selectedDates[0];
    const secondDate = selectedDates[1];

    stringData = `🔥Hola *FVTVRA*🔥, mi nombre es : *${
      alias === undefined ? "DESCONOCIDO" : alias
    }* estoy interesado en rentar equipo con ustedes ${renderDynamicDates(
      firstDate,
      secondDate
    )} para el proyecto: *${
      nameProject === undefined ? "DESCONOCIDO" : nameProject
    }* esta es la lista de items que requiero: %0a%0a ${stringData} %0a *TOTAL DE COTIZACION: ${getTotalPrices(
      shoppingCart
    )}mxn*`;
    return stringData;
  };

  const renderItems = () => {
    return (
      <>
        <Stack direction="column" spacing="40px" w="100%" h="100%">
          {shoppingCart.map((item) => {
            return (
              <Box
                w="100%"
                h="100%"
                display="flex"
                flexDirection="row"
                key={item.title}
              >
                <Box
                  w="120px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  position="relative"
                >
                  <Box
                    w="30px"
                    h="20px"
                    p="1px 5px"
                    bg="primary.500"
                    borderRadius="25em"
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    top={"-7%"}
                    left={"85%"}
                    zIndex={2}
                  >
                    <Text variant="XSBOLD" fontSize="12px">
                      {item.currentQuantity}
                    </Text>
                  </Box>
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
                <Box w="auto" pl="20px">
                  <Heading variant={["H9BOLD", "H8BOLD", "H8BOLD", "H8BOLD", "H8BOLD"]}>{item.title}</Heading>
                  <Text
                    pt="10px"
                    variant={[
                      "XSREGULAR",
                      "XSREGULAR",
                      "MDREGULAR",
                      "MDREGULAR",
                    ]}
                  >
                    Subtotal: {getPriceSingleItem(item)}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Stack>
        <Box w="100%" pt="40px">
          <Heading variant="H7BOLD">
            Total: {getTotalPrices(shoppingCart)}
          </Heading>
        </Box>
      </>
    );
  };

  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      p={basePadding()}
      flexDirection={["column", "column", "column", "row", "row"]}
    >
      {showConfetti && <Confetti width={width} height={height} />}
      <Box
        w={["100%", "100%", "100%", "0%", "0%"]}
        h="100%"
        display={["flex", "flex", "flex", "none", "none"]}
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="column"
        p="0px 20px 20px 20px"
      >
        <Box pb="10px" >
          <Text variant={["SMBOLD", "SMBOLD", "SMBOLD", "SMBOLD", "SMBOLD"]} >
            Total: {getTotalPrices(shoppingCart)}
          </Text>
        </Box>
        <Accordion allowMultiple w="100%">
          <AccordionItem border="none">
            <h2>
              <AccordionButton p="0px 0px 15px 0px" borderBottom="1px solid white">
                <Box flex="1" textAlign="left">
                  <Heading
                    variant={["H9BOLD", "H8BOLD", "H8BOLD", "H6BOLD", "H6BOLD"]}
                  >
                    <Text as="span" color="brand.primary" mr="20px">
                      <span style={{ color: "#B53145" }}>X</span>
                    </Text>
                    Mostrar résumen
                  </Heading>
                </Box>
                <AccordionIcon fontSize={["40px", "40px", "40px", "70px"]} />
              </AccordionButton>
            </h2>
            <AccordionPanel pt={10} pb={4}>
              {renderItems()}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box
        w={["100%", "100%", "100%", "50%", "60%"]}
        h="100%"
        display="flex"
        flexDirection="column"
        p={[
          "20px 20px 20px 20px",
          "20px 20px 20px 20px",
          "20px 20px 20px 20px",
          "20px 40px 20px 40px",
          "20px 40px 20px 40px",
        ]}
      >
        <Heading
          className="derpazoid"
          variant={["H6BOLD", "H6BOLD", "H5BOLD", "H5BOLD", "H5BOLD"]}
        >
          Déjanos tus datos
        </Heading>
        <Text
          pt="10px"
          className="derpazoid"
          variant={[
            "MDREGULAR",
            "MDREGULAR",
            "MDREGULAR",
            "MDREGULAR",
            "MDREGULAR",
          ]}
        >
          Los siguientes campos no son requeridos, pero nos ayudaria mucho para
          poder darte un mejor estimado
        </Text>
        <Box w="100%" p="40px 0px">
          <Stack direction="column" spacing="40px">
            <Box w="auto" display="flex" flexDirection="column">
              <Text
                variant={[
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                ]}
              >
                Tú nombre:
              </Text>
              <Box pt="10px" w={["100%", "100%", "380px", "380px", "380px"]}>
                <Input
                  h="50px"
                  placeholder="Escrbie tu nombre"
                  onChange={(e) => setAlias(e.target.value)}
                />
              </Box>
            </Box>
            <Box w="auto" display="flex" flexDirection="column">
              <Text
                variant={[
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                ]}
              >
                De que va tu proyecto:
              </Text>
              <Box pt="10px" w={["100%", "100%", "380px", "380px", "380px"]}>
                <Input
                  h="50px"
                  placeholder="Escrbie tu nombre"
                  onChange={(e) => setNameProject(e.target.value)}
                />
              </Box>
            </Box>
            <Box w="auto" display="flex" flexDirection="column">
              <Text
                variant={[
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                  "MDREGULAR",
                ]}
              >
                Duración del proyecto:
              </Text>
              <Box pt="10px" w={["100%", "100%", "380px", "380px", "380px"]}>
                <RangeDatepicker
                  selectedDates={selectedDates}
                  onDateChange={setSelectedDates}
                  propsConfigs={{
                    inputProps: {
                      height: "50px",
                    },
                    dateNavBtnProps: {
                      colorScheme: "blue",
                    },
                    dayOfMonthBtnProps: {
                      defaultBtnProps: {
                        _hover: {
                          background: "green.600",
                          color: "white",
                        },
                      },
                      isInRangeBtnProps: {
                        color: "white",
                        background: "green.500",
                      },
                      selectedBtnProps: {
                        background: "green.500",
                        color: "white",
                      },
                      todayBtnProps: {
                        borderColor: "blue.500",
                      },
                    },
                  }}
                />
              </Box>
            </Box>
            <Box w={["100%", "100%", "380px", "380px", "380px"]}>
              <Button
                mt={["8px", "8px", "15px", "15px"]}
                variant="white"
                size={["xs", "xs", "sm", "sm"]}
                w="100%"
                textTransform="uppercase"
                className="link"
                as="a"
                href={`https://api.whatsapp.com/send?phone=525543416012&text=${handleList()}`}
                target="_blank"
              >
                Enviar cotización
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        w={["100%", "100%", "100%", "50%", "40%"]}
        h="100%"
        display={["none", "none", "none", "flex", "flex"]}
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="column"
        p={["0px", "0px", "0px", "20px 40px", "20px 40px"]}
      >
        {renderItems()}
      </Box>
    </Box>
  );
};

export default Resumen;
