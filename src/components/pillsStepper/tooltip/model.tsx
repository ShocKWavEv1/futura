import { Box, Text, Tooltip } from "@chakra-ui/react";
import { TfiInfoAlt } from "react-icons/tfi";
import { TooltipPillsProps } from "./tooltip";

const TooltipPills: React.FC<TooltipPillsProps> = ({ maxQuantity }) => {
  return (
    <Box
      w="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Tooltip
        label={`La cantidad máxima es de: ${maxQuantity}`}
        fontSize="md"
        bg="white"
        placement="top"
        borderRadius="8px"
        p="5px 20px"
      >
        <Text mt="10px" variant="XSREGULAR" display="flex">
          Cantidad
          <TfiInfoAlt fontSize="13px" style={{ margin: "6px 0px 0px 8px" }} />
        </Text>
      </Tooltip>
    </Box>
  );
};

export default TooltipPills;
