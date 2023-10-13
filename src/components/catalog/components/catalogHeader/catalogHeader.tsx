import Modal from "@/components/catalog/components/modal/modal";
import MotionAnimation from "@/components/motionAnimation/motionAnimation";
import { Box, Heading, Show } from "@chakra-ui/react";
import { useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";
import { CatalogHeaderProps } from "./model";

const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  currentFilter,
  handleCurrentFilter,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box w="100%" p="5rem 0rem 2rem 0rem">
      <MotionAnimation delay={0}>
        <Heading
          as="span"
          variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}
          display="flex"
        >
          <Heading
            onClick={() => setOpen(true)}
            bg="primary.500"
            p="0rem 1rem"
            cursor="pointer"
            as="span"
            variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}
            display="flex"
            borderRadius="8px"
            className="link"
          >
            {currentFilter.title}&nbsp;
            <Show above="md">
              <TfiAngleDown />
            </Show>
          </Heading>
        </Heading>
      </MotionAnimation>
      <MotionAnimation delay={0.4}>
        <Heading
          variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}
          pt={["5px", "10px", "10px", "10px"]}
        >
          {currentFilter.id === 1 || currentFilter.id === 4
            ? "Disponibles en renta"
            : "Disponible en renta"}
        </Heading>
      </MotionAnimation>
      <Modal
        isOpen={isOpen}
        handleModal={() => setOpen(false)}
        handleCurrentFilter={(filter: any) => handleCurrentFilter(filter)}
      />
    </Box>
  );
};

export default CatalogHeader;
