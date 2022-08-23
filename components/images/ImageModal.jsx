import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ClosePage from "../close/ClosePage";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import ModalArrows from "../ModalArrows/ModalArrows";
import { PHOTOS } from "../../assets/assets";
import { setActiveImage, setImageOn } from "../../redux/gallery/gallery";
function ImageModal() {
  const dispatch = useDispatch();
  const { closedNavWidth, openNavWidth } = useSelector(({ navState }) => navState);

  const { activeImage, imageOn } = useSelector(({ galleryState }) => galleryState);
  const imageModalVariant = {
    hidden: {
      scale: 0.989,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.25,
      },
    },
  };
  const swapImageVariant = {
    hidden: {
      scale: 0.989,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.25,
      },
    },
  };

  const { navOn } = useSelector(({ navState }) => navState);
  useEffect(() => {}, [activeImage]);
  return (
    <motion.div
      className="image-modal-container row-c-c"
      initial={{ opacity: 0, left: navOn ? openNavWidth : closedNavWidth }}
      animate={{ opacity: 1, left: navOn ? openNavWidth : closedNavWidth }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.5, default: { ease: "easeInOut" } }}
    >
      <ClosePage
        customClass={"image-modal-background-close"}
        closeFunction={() => {
          dispatch(setImageOn(false));
        }}
      />
      <div className="image-modal-close-container">
        {/* X Icon */}
        <motion.button
          className="image-modal-close row-c-c"
          onClick={() => {
            dispatch(setImageOn(false));
          }}
        >
          <MdOutlineClose />
        </motion.button>
      </div>
      {/* Modal Border */}
      <motion.div className={`image-modal-border`}>
        {/* Modal Image */}
        <motion.img
          className="image-modal-image row-c-c"
          variants={imageModalVariant}
          initial={`hidden`}
          animate={`visible`}
          src={activeImage?.src}
          alt="Photo by Johnny Wong"
        />

        {/* Modal Arrows */}
        <ModalArrows />
      </motion.div>
    </motion.div>
  );
}

export default ImageModal;
