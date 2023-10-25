import { Box, Input, Text } from "@chakra-ui/react";
import { PillsInputProps } from "./model";
import { useEffect, useState } from "react";

const PillsInput: React.FC<PillsInputProps> = ({
  quantity,
  maxQuantity,
  handleQuantity,
  handleError,
}) => {
  const [currentItemQuantity, setCurrentQuantity] = useState(quantity);

  useEffect(() => {
    setCurrentQuantity(quantity);
  }, [quantity]);

  const handleMaxQuantity = (val: any) => {
    const valNumber = parseInt(val);

    handleQuantity(valNumber);
  };

  return (
    <Box
      h="20px"
      p="0px 5px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text variant="XXSREGULAR">{currentItemQuantity}</Text>
    </Box>
  );
};

export default PillsInput;
