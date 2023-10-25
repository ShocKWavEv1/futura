import { patchCart } from "@/constants/constants";
import ShoppingCartContext from "@/context/shoppingCartContext";
import { Box, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { PillsStepperProps } from "./model";
import PillsAction from "./pillsAction/pillsAction";
import PillsInput from "./pillsInput/pillsInput";
import TooltipPills from "./tooltip/model";

const PillStepper: React.FC<PillsStepperProps> = ({
  index,
  maxQuantity,
  currentItemQuantity,
}) => {
  const [isLoading, setLoader] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);

  const {
    user_id,
    shoppingCart,
    handlePatchShoppingCart,
    handleShoppingDrawer,
  } = useContext(ShoppingCartContext);

  const handleLoading = () => {
    setLoader(!isLoading);
  };

  const handlePatch = (arr: any) => {
    patchCart(
      arr,
      user_id,
      handlePatchShoppingCart,
      handleLoading,
      handleShoppingDrawer
    );
  };

  const handleAddItem = (currentItem: any, currentQuantity: any, arr: any) => {
    if (currentItemQuantity === maxQuantity) {
      setError(true);
    } else if (currentItemQuantity <= maxQuantity) {
      currentQuantity = currentQuantity + 1;
      currentItem = { ...currentItem, currentQuantity };
      shoppingCart.map((item: any, i: any) => {
        if (i === index) {
          arr.push(currentItem);
        } else {
          arr.push(item);
        }
      });
      handlePatch(arr);
    }
  };

  const handleRemoveItem = (
    currentItem: any,
    currentQuantity: any,
    arr: any
  ) => {
    setError(false);
    if (currentItemQuantity <= 1) {
      return null;
    } else {
      currentQuantity = currentQuantity - 1;
      currentItem = { ...currentItem, currentQuantity };
      shoppingCart.map((item: any, i: any) => {
        if (i === index) {
          arr.push(currentItem);
        } else {
          arr.push(item);
        }
      });
      handlePatch(arr);
    }
  };

  const handleItem = (type: string, value: any) => {
    let currentItem: any = shoppingCart[index];
    let currentQuantity = currentItemQuantity;
    const arr: any = [];
    if (type === "add") {
      handleAddItem(currentItem, currentQuantity, arr);
    } else if (type === "minus") {
      handleRemoveItem(currentItem, currentQuantity, arr);
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
        mt="10px"
        p="5px"
        borderRadius="25em"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        ml="-1px"
      >
        <PillsAction
          typeAction="minus"
          isLoading={isLoading}
          handleAction={() => handleItem("minus", "")}
          handleError={(value: boolean) => setError(value)}
        />
        <PillsInput
          quantity={currentItemQuantity}
          maxQuantity={maxQuantity}
          handleQuantity={(value: any) => handleItem("input", value)}
          handleError={(value: boolean) => setError(value)}
        />
        <PillsAction
          typeAction="add"
          isLoading={isLoading}
          handleAction={() => handleItem("add", "")}
          handleError={(value: boolean) => setError(value)}
        />
      </Box>
      {hasError && (
        <Box>
          <Text variant="XSBOLD" color="red">
            <span style={{ fontSize: 12, color: "#B53145" }}>
              La cantidad máxima es de: {maxQuantity}
            </span>
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default PillStepper;
