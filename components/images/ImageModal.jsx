import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ClosePage from "../close/ClosePage";
import { motion } from "framer-motion";

function ImageModal({ imageOn, image, toggleViewImage }) {
  return (
    <motion.div
      className="image-modal-container row-c-c"
      data-isOpen={imageOn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ClosePage closeFunction={toggleViewImage} />
      <button
        className="image-modal-close"
        onClick={() => {
          toggleViewImage();
        }}
      >
        <MdOutlineClose />
      </button>
      <div className="image-modal-border">
        <img className="image-modal-image" src={image?.src} alt="Photo by Johnny Wong" />
      </div>
    </motion.div>
  );
}

export default ImageModal;
