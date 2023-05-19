import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import { PillsStepperProps } from "./model";

const PillStepper: React.FC<PillsStepperProps> = ({
  quantity,
  maxQuantity,
}) => {
  return (
    <Box
      w="auto"
      border="1px solid white"
      m="10px"
      p="5px"
      borderRadius="25em"
      display="flex"
      flexDirection="row"
    >
      <Box
        w="25px"
        h="25px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="25em"
        cursor="pointer"
        _hover={{ backgroundColor: "hsla(60,14%,95%,.15)" }}
      >
        <TfiMinus fontSize="14px" />
      </Box>
      <Box w="40px" h="25px" p="0px 10px">
        <Input
          border="none"
          p="0px"
          m="0px"
          h="25px"
          focusBorderColor="transparent"
          maxLength={30}
        />
      </Box>
      <Box
        w="25px"
        h="25px"
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
  );
};

export default PillStepper;
