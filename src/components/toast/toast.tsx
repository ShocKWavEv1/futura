import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { ToastProps } from "./model";

const Toast: React.FC<ToastProps> = ({ title, status }) => {
  return (
    <Box
      color="white"
      p="15px 20px"
      bg={status === "success" ? "green.500" : "red.500"}
      borderRadius={8}
    >
      <Text variant="SMBOLD">{title}</Text>
    </Box>
  );
};

export default Toast;
