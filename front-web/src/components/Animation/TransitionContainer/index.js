import React from "react";
import { motion } from "framer-motion";
import { Main } from './styled'

export const OnCreate = ({ children }) => (
  <Main>
    <motion.div
      className="transition-content"
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-50%" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  </Main>
);
