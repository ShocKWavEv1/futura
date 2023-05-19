import { Box, Heading, Input, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { TfiInfo, TfiInfoAlt, TfiMinus, TfiPlus } from "react-icons/tfi";
import { PillsStepperProps } from "./model";

const PillStepper: React.FC<PillsStepperProps> = ({
  quantity,
  maxQuantity,
}) => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        w="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Tooltip
          label="La cantidad máxima es de: 12"
          fontSize="md"
          bg="white"
          placement="top"
        >
          <Text mt="10px" variant="XSREGULAR" display="flex">
            Cantidad
            <TfiInfoAlt fontSize="13px" style={{ margin: "6px 0px 0px 8px" }} />
          </Text>
        </Tooltip>
      </Box>
      <Box
        w="auto"
        border="1px solid white"
        m="10px"
        p="5px"
        borderRadius="25em"
        display="flex"
        flexDirection="row"
        ml="-1px"
      >
        <Box
          w="20px"
          h="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="25em"
          cursor="pointer"
          _hover={{ backgroundColor: "hsla(60,14%,95%,.15)" }}
        >
          <TfiMinus fontSize="14px" />
        </Box>
        <Box w="40px" h="20px" p="0px 10px" mt="-3px">
          <Input
            border="none"
            p="0px"
            m="0px"
            h="20px"
            focusBorderColor="transparent"
            value={12}
            maxLength={30}
          />
        </Box>
        <Box
          w="20px"
          h="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="25em"
          cursor="pointer"
          _hover={{ backgroundColor: "hsla(60,14%,95%,.15)" }}
        >
          <TfiPlus fontSize="12px" />
        </Box>
      </Box>
    </Box>
  );
};

export default PillStepper;
