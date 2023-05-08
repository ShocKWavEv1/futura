import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BadgeProps } from "./model";

const Badge: React.FC<BadgeProps> = ({ totalItems }) => {
  return totalItems.length === 0 ? null : (
    <Box
      position="absolute"
      bg="primary.500"
      w="30px"
      h="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="1px 5px"
      borderRadius="25em"
      mt="-40px"
      ml="40px"
    >
      <Text variant="XSBOLD" fontSize="12px">
        {totalItems.length}
      </Text>
    </Box>
  );
};

export default Badge;
