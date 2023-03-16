import "./index.css";
import { motion } from "framer-motion";

export default function App() {
  const handleClick = () => {
    // Animate the box
    const box = document.querySelector(".box");
    box.classList.add("animate");
  };

  return (
    <div className="container">
      <motion.div
        className="box"
        onClick={handleClick}
        animate={{
          scale: [1, 3],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      ></motion.div>
    </div>
  );
}
