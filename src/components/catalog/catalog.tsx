/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import { CatalogProps } from "./model";

import SwiperCatalog from "./components/swiper/swiper";
import CatalogHeader from "./components/catalogHeader/catalogHeader";
import { useState } from "react";
import { filters } from "./constants";
import { basePadding } from "@/constants/basePadding";

const Catalog: React.FC<CatalogProps> = ({ products }) => {
  const [currentFilter, setFilter] = useState(filters[0]);

  return (
    <Box id="catalogo" w="100%" p={basePadding()}>
      <CatalogHeader
        currentFilter={currentFilter}
        handleCurrentFilter={(filter: any) => setFilter(filter)}
      />
      <Box w="100%" mt="10px">
        <SwiperCatalog
          products={products}
          currentFilter={currentFilter}
          handleFilter={(filter: any) => setFilter(filter)}
        />
      </Box>
    </Box>
  );
};

export default Catalog;
