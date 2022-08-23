import React, { useCallback, useEffect, useRef, useState } from "react";
import { PHOTOS } from "../assets/assets";
import ImageModal from "../components/images/ImageModal";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setActiveImage } from "../redux/gallery/gallery";

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

function Gallery() {
  const dispatch = useDispatch();
  const { imageOn } = useSelector(({ galleryState }) => galleryState);

  const imageVariants = {
    hidden: {
      scale: 0.99,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    // <motion.div className="gallery-container" style={{ overflowY: imageOn ? "hidden" : "visible" }}>
    <motion.div className="gallery-container">
      {/* Gallery Photo */}
      <div id="gallery" className="gallery-images">
        {PHOTOS.map((image, imageIndex) => (
          <div
            className="gallery-image-container"
            key={imageIndex}
            onClick={() => {
              dispatch(setActiveImage({ src: image.src, index: imageIndex }));
            }}
            style={{ gridColumn: image.orientation === "LANDSCAPE" ? "span 2" : "span 1" }}
          >
            <motion.img
              className="gallery-image row-c-c"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: imageIndex * 0.12, duration: 0.3 }}
              src={image.src}
              alt="Photo by Johnny Wong"
            />
          </div>
        ))}
      </div>

      {/* Gallery Image Modal*/}
      <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => null}>
        {imageOn && <ImageModal />}
      </AnimatePresence>
    </motion.div>
  );
}

export default Gallery;
