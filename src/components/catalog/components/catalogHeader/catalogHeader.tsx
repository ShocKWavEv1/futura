import Modal from "@/components/catalog/components/modal/modal";
import { Box, Button, Heading, Show } from "@chakra-ui/react";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { CatalogHeaderProps } from "./model";

const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  currentFilter,
  handleCurrentFilter,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box w="100%" p="5rem 0rem 2rem 0rem">
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
        >
          {currentFilter.title}&nbsp;
          <Show above="sm">
            <SlArrowDown />
          </Show>
        </Heading>
        <Show above="sm">
          <Heading variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]} pl="5px">
            <span>en</span>
          </Heading>
        </Show>
      </Heading>
      <Heading
        variant={["H6BOLD", "H5BOLD", "H4BOLD", "H4BOLD"]}
        pt={["5px", "10px", "10px", "10px"]}
      >
        Nuestro Cátalogo
      </Heading>
      <Modal
        isOpen={isOpen}
        handleModal={() => setOpen(false)}
        handleCurrentFilter={(filter: any) => handleCurrentFilter(filter)}
      />
    </Box>
  );
};

export default CatalogHeader;
