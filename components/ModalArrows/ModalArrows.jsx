import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { setHoverNext, setHoverPrev, setSwitchImage } from "../../redux/gallery/gallery";
import { useDispatch, useSelector } from "react-redux";

function ModalArrows() {
  const dispatch = useDispatch();
  const { hoverNext, hoverPrev, activeImage } = useSelector(({ galleryState }) => galleryState);
  const arrowVariant = {
    hidden: {
      scale: 0.989,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <>
      {/* ------------------------- Forward Arrow ------------------------- */}
      <motion.div
        className={`image-right-panel row-fe-c ${hoverNext ? "hoverNext" : ""}`}
        onMouseEnter={() => {
          dispatch(setHoverNext(true));
        }}
        onMouseLeave={() => {
          dispatch(setHoverNext(false));
        }}
        onClick={() => {
          dispatch(setSwitchImage(activeImage.index + 1));
        }}
      >
        <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => null}>
          {hoverNext && (
            <motion.div
              className="image-right-arrow row-fe-c"
              variants={arrowVariant}
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", duration: 0.3, default: { ease: "easeInOut" } }}
              exit={{ opacity: 0 }}
            >
              <MdKeyboardArrowRight />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ------------------------- Previous Arrow ------------------------- */}
      <motion.div
        className={`image-left-panel row-fs-c ${hoverPrev ? "hoverPrev" : ""}`}
        onMouseEnter={() => {
          dispatch(setHoverPrev(true));
        }}
        onMouseLeave={() => {
          dispatch(setHoverPrev(false));
        }}
        onClick={() => {
          dispatch(setSwitchImage(activeImage.index - 1));
        }}
      >
        <AnimatePresence initial={true} exitBeforeEnter onExitComplete={() => null}>
          {hoverPrev && (
            <motion.div
              className="image-left-arrow row-fs-c"
              variants={arrowVariant}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 0.3, default: { ease: "easeInOut" } }}
            >
              <MdKeyboardArrowLeft />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default ModalArrows;
