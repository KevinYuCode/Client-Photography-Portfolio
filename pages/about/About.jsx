import React, { useEffect } from "react";
import { Profile_Photo } from "../../assets/assets";
import { motion } from "framer-motion";
export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

function About() {

  return (
    <div id="about" className="about-container row-c-c">
      <motion.div className="about-content row-c-c">
        <motion.div
          className="about-info"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="about-title">About</h1>
          <p className="about-description">
            Hi, I'm Johnny! I'm a fashion and portrait photographer based in Toronto and I am currently
            studying Commerce at Queen's University. I always create a comfortable and safe space for my
            clients, and I aim to use my art as a vessel to celebrate various skin tones, love stories, ages,
            sizes, and styles. Welcome to my portfolio!
          </p>
        </motion.div>
        <motion.div
          className="about-profile-photo row-c-c"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img src={Profile_Photo.src} alt="Johnny Wong" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
