import Modal from "@/components/catalog/components/modal/modal";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { CatalogHeaderProps } from "./model";

const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  currentFilter,
  handleCurrentFilter,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box w="100%" p="3rem 0rem 2rem 0rem">
      <Heading as="span" variant="H4BOLD" display="flex">
        <Heading
          onClick={() => setOpen(true)}
          bg="primary.500"
          p="0rem 1rem"
          cursor="pointer"
          as="span"
          variant="H4BOLD"
          display="flex"
        >
          {currentFilter.title}&nbsp;
          <SlArrowDown />
        </Heading>
        <Heading variant="H4BOLD" pl="5px">
          <span>en</span>
        </Heading>
      </Heading>
      <Heading variant="H4BOLD">Nuestro Cátalogo</Heading>
      <Modal
        isOpen={isOpen}
        handleModal={() => setOpen(false)}
        handleCurrentFilter={(filter: any) => handleCurrentFilter(filter)}
      />
    </Box>
  );
};

export default CatalogHeader;
