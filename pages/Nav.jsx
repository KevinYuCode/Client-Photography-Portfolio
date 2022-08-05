import { useRouter } from "next/router";
import React, { useState } from "react";
import name_logo from "../assets/logos/name_logo.svg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_TAB } from "../assets/assets";
function Nav() {
  const router = useRouter();
  const [navOn, setNavOn] = useState(true);
  const variants = {
    navTabOpen: { x: 0 },
    navTabClosed: { x: "-80%" },
    navContentOpen: { opacity: 1 },
    navContentClosed: { opacity: 0 },
  };
  return (
    <motion.nav
      className="nav-container"
      animate={navOn ? "navTabOpen" : "navTabClosed"}
      transition={{ stiffness: 50, default: { ease: "easeInOut" } }}
      variants={variants}
    >
      {/* NAV TAB */}
      <button
        className="nav-toggle"
        onClick={() => {
          setNavOn(!navOn);
        }}
      >
        <img src={NAV_TAB.src} alt="Menu Tab" />
      </button>
      <motion.div
        className="nav-content"
        animate={navOn ? "navContentOpen" : "navContentClosed"}
        variants={variants}
        transition={{ duration: 0.4 }}
      >
        <div className="nav-header ">
          {/* NAV LOGO */}
          <Link className="nav-links" href="/">
            <img src={name_logo.src} alt="Johnny Wong" className="nav-logo" />
          </Link>
          {/* NAV LINKS */}
          <div className="nav-links-container col-c-fs">
            <div className="nav-gallery-links col-c-fs">
              <div className="nav-divider"></div>
              <Link className="nav-links" href="/">
                <a className={router.pathname === "/" ? "nav-active nav-link" : "nav-link"}>Basics</a>
              </Link>
              <div className="nav-divider"></div>
            </div>
            <Link className="nav-links" href="/about">
              <a className={router.pathname === "/about" ? "nav-active nav-link" : "nav-link"}>About</a>
            </Link>
            <Link className="nav-links" href="/contact">
              <a className={router.pathname === "/contact" ? "nav-active nav-link" : "nav-link"}>Contact</a>
            </Link>
          </div>
        </div>
        <div className="nav-socials-container row-fs-c">
          <h3>Instagram</h3>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Nav;
