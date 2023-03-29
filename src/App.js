import "./index.css";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function App() {
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    // Animate the box
    setScale(3);
  };

  return (
    <div className="container">
      <motion.div
        className="box"
        onClick={handleClick}
        initial={{
          scaleX: 1,
          scaleY: 1,
        }}
        animate={{
          scaleX: scale,
          scaleY: scale,
          transformOrigin: "top left",
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      ></motion.div>
    </div>
  );
}
