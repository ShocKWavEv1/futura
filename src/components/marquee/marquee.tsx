import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import ModalRequisitos from "./modalRequisitos/modalRequisitos";
import { MarqueeProps } from "./model";

const MarqueeBanner: React.FC<MarqueeProps> = ({ items }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Box w="100%" p="50px 0rem 30px 0rem">
      <Marquee direction="left" speed={30} loop={0} gradient={false}>
        {items.map((item: any) => {
          return (
            <Box key={item} bg="black" width="auto" p="1rem 2rem">
              <Text
                variant="XSBOLD"
                textTransform="uppercase"
                opacity={0.8}
                className="link"
                onClick={() => setOpen(true)}
              >
                {item}
              </Text>
            </Box>
          );
        })}
      </Marquee>
      <ModalRequisitos isOpen={isOpen} handleModal={() => setOpen(false)} />
    </Box>
  );
};

export default MarqueeBanner;
