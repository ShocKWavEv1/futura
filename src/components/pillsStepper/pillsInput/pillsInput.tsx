import { Box, Input } from "@chakra-ui/react";
import { PillsInputProps } from "./model";

const PillsInput: React.FC<PillsInputProps> = ({
  quantity,
  maxQuantity,
  handleQuantity,
}) => {
  return (
    <Box w="40px" h="20px" p="0px 10px" mt="-3px">
      <Input
        border="none"
        p="0px"
        m="0px"
        h="20px"
        focusBorderColor="transparent"
        value={quantity}
        maxLength={maxQuantity}
        onChange={(e) => handleQuantity(e.target.value)}
        type="number"
      />
    </Box>
  );
};

export default PillsInput;
