import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
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
          <a href="https://www.instagram.com/fvtvraproduce/" target="_blank">
            <Text
              variant={["XSMEDIUM", "SMMEDIUM", "MDMEDIUM", "MDMEDIUM"]}
              className="link"
            >
              <SlSocialInstagram />
            </Text>
          </a>
        </Box>
        <Box cursor="pointer" ml="10px">
          <a href="https://vimeo.com/fvtvraproduce" target="_blank">
            <Text
              variant={["MDMEDIUM", "LGMEDIUM", "LGMEDIUM", "LGMEDIUM"]}
              className="link"
            >
              <TfiVimeo />
            </Text>
          </a>
        </Box>
      </Box>
      <Text variant={["XSMEDIUM", "XSMEDIUM", "SMMEDIUM", "SMMEDIUM"]}>
        © MMXXII, FVTVRA |{" "}
        <Link href="https://www.slmrn.studio" target="_blank">
          <Text as="span" cursor="pointer" className="link">
            SLMRN
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
