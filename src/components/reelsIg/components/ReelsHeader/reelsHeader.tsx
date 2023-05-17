import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ReelsHeader: React.FC = () => {
  return (
    <Box w="100%" p="6rem 0rem 2rem 0rem">
      <Link
        href="https://www.instagram.com/explore/tags/ingafferwetrvst/"
        target="_blank"
      >
        <Heading variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}>
          <span style={{ color: "#B53145" }}>#INGAFFERWETRVST </span>
        </Heading>
      </Link>
    </Box>
  );
};

export default ReelsHeader;
