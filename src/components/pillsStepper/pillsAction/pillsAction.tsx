import { Box } from "@chakra-ui/react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import { PillsActionProps } from "./model";

const PillsAction: React.FC<PillsActionProps> = ({
  typeAction,
  isLoading,
  handleAction,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="25em"
      padding="5px 7px"
      _hover={{ backgroundColor: "hsla(60,14%,95%,.15)" }}
      onClick={() => handleAction()}
    >
      {typeAction === "add" ? (
        <TfiPlus fontSize="12px" />
      ) : (
        <TfiMinus fontSize="14px" />
      )}
    </Box>
  );
};

export default PillsAction;
