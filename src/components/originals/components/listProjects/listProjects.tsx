import MotionAnimation from "@/components/motionAnimation/motionAnimation";
import ShoppingCartContext from "@/context/shoppingCartContext";
import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ListProjectsProps } from "./model";

const ListProjects: React.FC<ListProjectsProps> = ({ listProjects }) => {
  const { handleReelVideo } = useContext(ShoppingCartContext);
  return (
    <Box w="100%">
      <MotionAnimation delay={0.6}>
        <Box
          w="100%"
          m="5px"
          p="20px 10px"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          cursor="pointer"
          borderBottom="1px solid white"
          onClick={() => handleReelVideo(true, listProjects.url)}
          transition="all .3s ease-in"
          _hover={{
            bg: "primary.500",
            padding: ["20px 20px", "20px 20px", "20px 30px", "20px 30px"],
            borderColor: "primary.500",
          }}
          className="link"
        >
          <Heading
            variant={["H8REGULAR", "H8REGULAR", "H7REGULAR", "H7REGULAR"]}
          >
            {listProjects.chapter} - {listProjects.description}
          </Heading>
        </Box>
      </MotionAnimation>
    </Box>
  );
};

export default ListProjects;
