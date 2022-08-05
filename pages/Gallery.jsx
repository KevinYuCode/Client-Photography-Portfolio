import React, { useState } from "react";
import { PHOTOS } from "../assets/assets";
import ImageModal from "../components/images/ImageModal";
import { motion, AnimatePresence } from "framer-motion";
function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  const [imageOn, setImageOn] = useState(false);
  const toggleViewImage = (selectedImage) => {
    setActiveImage(selectedImage ?? activeImage ?? null);
    setImageOn(!imageOn);
  };
  return (
    <div className="gallery-container">
      {PHOTOS.map((image, photoKey) => (
        <div
          className="gallery-image-container"
          key={photoKey}
          onClick={() => {
            toggleViewImage(image);
          }}
          style={{ gridColumn: image.orientation === "LANDSCAPE" ? "span 2" : "span 1" }}
        >
          <img className="gallery-image row-c-c" src={image.src} alt="Photo by Johnny Wong" />
        </div>
      ))}
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {imageOn && <ImageModal image={activeImage} imageOn={imageOn} toggleViewImage={toggleViewImage} />}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
