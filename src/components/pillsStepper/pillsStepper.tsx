import { patchCart } from "@/constants/constants";
import ShoppingCartContext from "@/context/shoppingCartContext";
import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { PillsStepperProps } from "./model";
import PillsAction from "./pillsAction/pillsAction";
import PillsInput from "./pillsInput/pillsInput";
import TooltipPills from "./tooltip/model";

const PillStepper: React.FC<PillsStepperProps> = ({
  index,
  maxQuantity,
  currentQuantity,
}) => {
  const [quantity, setCurrentQuantity] = useState<any>(currentQuantity);
  const [isLoading, setLoader] = useState<boolean>(false);

  const {
    user_id,
    shoppingCart,
    handlePatchShoppingCart,
    handleShoppingDrawer,
  } = useContext(ShoppingCartContext);

  useEffect(() => {
    if (quantity !== currentQuantity) {
      let currentItem: any = shoppingCart[index];

      const currentQuantity = quantity;

      currentItem = { ...currentItem, currentQuantity };

      const arr: any = [];

      shoppingCart.map((item, i) => {
        if (i === index) {
          arr.push(currentItem);
        } else {
          arr.push(item);
        }
      });

      patchCart(
        arr,
        user_id,
        handlePatchShoppingCart,
        handleLoading,
        handleShoppingDrawer
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  const handleLoading = (val: boolean) => {
    setLoader(val);
  };

  const handleItem = (type: string, value: any) => {
    setLoader(true);
    if (type === "input") {
      const quantityNumber: number = parseInt(value);
      setCurrentQuantity(quantityNumber);
    } else {
      setCurrentQuantity(type === "add" ? quantity + 1 : quantity - 1);
    }
  };

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <TooltipPills maxQuantity={maxQuantity} />
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
        <PillsAction
          typeAction="minus"
          isLoading={isLoading}
          handleAction={() => handleItem("minus", "")}
        />
        <PillsInput
          quantity={quantity}
          maxQuantity={maxQuantity}
          handleQuantity={(value: any) => handleItem("input", value)}
        />
        <PillsAction
          typeAction="add"
          isLoading={isLoading}
          handleAction={() => handleItem("add", "")}
        />
      </Box>
    </Box>
  );
};

export default PillStepper;
