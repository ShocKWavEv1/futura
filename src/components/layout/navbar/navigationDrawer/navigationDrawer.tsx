import Backdrop from "@/components/backdrop/backdrop";
import React from "react";
import { motion } from "framer-motion";
import { NavigationDrawerProps } from "./model";

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  handleDrawer,
}) => {
  return (
    <Backdrop
      isOpen={isOpen}
      handleBackdrop={() => handleDrawer()}
      type="drawer"
    >
      <motion.aside
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          width: "100%",
          borderBottom: "1px solid white",
        }}
      >
        Hi Drawer
      </motion.aside>
    </Backdrop>
  );
};

export default NavigationDrawer;
