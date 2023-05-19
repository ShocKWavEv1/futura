import React from "react";
import { motion } from "framer-motion";
import { MotionAnimationProps } from "./model";

const MotionAnimation: React.FC<MotionAnimationProps> = ({
  children,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionAnimation;
