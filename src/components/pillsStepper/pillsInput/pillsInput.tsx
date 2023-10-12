import { Box, Input } from "@chakra-ui/react";
import { PillsInputProps } from "./model";
import { useState } from "react";

const PillsInput: React.FC<PillsInputProps> = ({
  quantity,
  maxQuantity,
  handleQuantity,
  handleError,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const handleMaxQuantity = (val: any) => {
    setItemQuantity(val);
    const valNumber = parseInt(val);
    if (valNumber > maxQuantity || val === "") {
      handleError(true);
    } else {
      handleError(false);
      handleQuantity(val);
    }
  };
  return (
    <Box w="40px" h="20px" p="0px 10px" mt="-3px">
      <input
        value={itemQuantity}
        maxLength={maxQuantity}
        onChange={(e) => handleMaxQuantity(e.target.value)}
        type="number"
        style={{ width: "100%", background: "transparent" }}
      />
    </Box>
  );
};

export default PillsInput;
