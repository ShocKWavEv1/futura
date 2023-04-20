import { Box, Text } from "@chakra-ui/react";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { TfiVimeo } from "react-icons/tfi";

const Footer: React.FC = () => {
  return (
    <Box
      w="100%"
      h="auto"
      p="20px 0px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pb="12px"
      >
        <Box cursor="pointer">
          <SlSocialInstagram fontSize="1.45vw" />
        </Box>
        <Box ml="12px" mr="10px" cursor="pointer">
          <SlSocialYoutube fontSize="1.95vw" />
        </Box>
        <Box cursor="pointer">
          <TfiVimeo fontSize="1.60vw" />
        </Box>
      </Box>
      <Text variant="XSMEDIUM">
        © MMXXII, fvtvra ⦿{" "}
        <Text as="span" textDecoration="underline" cursor="pointer">
          housecolor
        </Text>
      </Text>
    </Box>
  );
};

export default Footer;
