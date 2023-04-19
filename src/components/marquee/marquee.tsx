import { Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { MarqueeProps } from "./model";

const MarqueeBanner: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <Marquee direction="left" speed={20} loop={0}>
      {items.map((item: any) => {
        return (
          <Box key={item} bg="red" width="auto" p="1rem 2rem">
            {item}
          </Box>
        );
      })}
    </Marquee>
  );
};

export default MarqueeBanner;
