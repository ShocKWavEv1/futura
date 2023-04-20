import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { MarqueeProps } from "./model";

const MarqueeBanner: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <Box w="100%" p="50px 0rem 0rem 0rem">
      <Marquee direction="left" speed={30} loop={0} gradient={false}>
        {items.map((item: any) => {
          return (
            <Box key={item} bg="black" width="auto" p="1rem 2rem">
              <Text variant="XSBOLD" textTransform="uppercase" opacity={0.8}>
                {item}
              </Text>
            </Box>
          );
        })}
      </Marquee>
    </Box>
  );
};

export default MarqueeBanner;
