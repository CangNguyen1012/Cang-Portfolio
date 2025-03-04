import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

// calculate the reverse index for staggred delay
const reverseIndex = (index) => {
  const totalSteps = 8;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs
  Each div will have the same animation by the stairAnimation object.
  The delay for each div is calculated dynamically based on it's reverse index.
  Creating a stagger effect with decreasing delay for each subsequent steps.
  */}
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
