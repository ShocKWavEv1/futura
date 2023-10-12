import MotionAnimation from "@/components/motionAnimation/motionAnimation";
import { basePadding } from "@/constants/basePadding";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ReelsHeader: React.FC = () => {
  return (
    <Box w="100%" p="4rem 0rem 0rem 0rem" textAlign="center">
      <MotionAnimation delay={0.2}>
        <Link
          href="https://www.instagram.com/explore/tags/ingafferwetrvst/"
          target="_blank"
        >
          <Heading
            p={basePadding()}
            variant={["H7BOLD", "H5BOLD", "H4BOLD", "H4BOLD", "H4BOLD"]}
          >
            <span
              className="link"
              style={{ color: "#B53145", textDecoration: "underline" }}
            >
              #INGAFFERWETRVST{" "}
            </span>
          </Heading>
        </Link>
      </MotionAnimation>
    </Box>
  );
};

export default ReelsHeader;
