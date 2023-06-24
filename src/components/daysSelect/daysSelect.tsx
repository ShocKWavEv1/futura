import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { TfiAngleDown } from "react-icons/tfi";
import { DaysSelectProps } from "./model";

const DaysSelect: React.FC<DaysSelectProps> = ({}) => {
  return (
    <Menu>
      <MenuButton bg="white" p="5px 25px">
        <Box display="flex">
          <Text variant="XSBOLD" _hover={{ opacity: 1 }}>
            Hi
          </Text>
          <Box
            pl="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text variant="SMMEDIUM" _hover={{ opacity: 1 }}>
              <TfiAngleDown />
            </Text>
          </Box>
        </Box>
      </MenuButton>
      <Portal>
        <MenuList p="10px" border="none" bg="red">
          <MenuItem bg="red">
            <Text variant="XSREGULAR" className="navLink">
              Hiii
            </Text>
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default DaysSelect;
