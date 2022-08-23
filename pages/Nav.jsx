import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import name_logo from "../assets/logos/name_logo.svg";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { NAV_TAB, NAV_X } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { setNavOn } from "../redux/nav";
import { AiOutlineInstagram } from "react-icons/ai";
import useNavWidth from "../hooks/useScreenSize";

function Nav() {
  const dispatch = useDispatch();
  const { navOn, closedNavWidth, openNavWidth, screenSize } = useSelector(({ navState }) => navState);
  const { scrollDirection, imageOn } = useSelector(({ galleryState }) => galleryState);
  const router = useRouter();
  useNavWidth();

  const navContainerVariants = {
    hidden: {
      width: closedNavWidth,
      transition: {
        type: "spring",
        duration: 0.5,
        // delay: 0.2,
        default: { ease: "easeInOut" },
      },
    },
    visible: {
      width: openNavWidth,
      transition: {
        type: "spring",
        duration: 0.5,
        // delay: 0.2,
        default: { ease: "easeInOut" },
      },
    },
  };
  const navContentVariants = {
    hidden: {
      x: "-30vw",
      opacity: 1,
      transition: { type: "smooth", duration: 0.3, delay: 0, opacity: { duration: 1 } },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "smooth", duration: 0.3, delay: 0, opacity: { duration: 1 } },
    },
  };
  const navContentVariantsMobile = {
    hidden: {
      x: 0,
      opacity: 0,
      transition: {
        opacity: { duration: 0 },
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        opacity: { delay: 0.5 },
      },
    },
  };
  const navSocialVariants = {
    hidden: {
      opacity: [0, screenSize === "MOBILE" ? 0 : 1],
    },
    visible: {
      opacity: [0, 1],
    },
  };
  const mobileNavVariants = {
    hidden: {
      opacity: 0,
      transition: { delay: 0.0 },
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.0, duration: 0.2, ease: "easeInOut" },
    },
  };
  const toggleNav = (navOnState) => {
    dispatch(setNavOn(navOnState));
  };

  useEffect(() => {
    if (screenSize === "MOBILE") {
      dispatch(setNavOn(false));
    }
  }, [router.events, router]);

  useEffect(() => {
    if (screen.width > 900) {
      dispatch(setNavOn(true));
    }
  }, []);

  return (
    <motion.nav
      className="nav-container col-fs-c"
      variants={navContainerVariants}
      initial={navOn ? "visible" : "hidden"}
      animate={navOn ? "visible" : "hidden"}
      style={{ boxShadow: router.route !== "/" ? "0 3px 8px rgba(0,0,0,.24)" : "none" }}
    >
      {/* MOBILE NAV TAB */}
      <AnimatePresence initial={false} exitBeforeEnter>
        {!imageOn && !navOn && screenSize === "MOBILE" && scrollDirection === "UP" && (
          <motion.div
            className="mobile-nav row-sb-c"
            variants={mobileNavVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
          >
            <Link href="/">
              <motion.img src={name_logo.src} alt="Johnny Wong" className="mobile-nav-logo" />
            </Link>
            <motion.button
              className="mobile-nav-toggle"
              onClick={() => {
                toggleNav(!navOn);
              }}
            >
              <motion.img className="nav-toggle-img" src={NAV_TAB.src} alt="Menu Tab" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAV TAB */}
      <button
        className={`nav-toggle`}
        onClick={() => {
          toggleNav(!navOn);
        }}
      >
        <motion.img
          className="nav-toggle-img"
          src={screenSize === "MOBILE" ? NAV_X.src : NAV_TAB.src}
          alt="Menu Tab"
        />
      </button>

      <div className="nav-content">
        {/* NAV LINKS */}
        <div className="nav-header" style={{ padding: navOn ? "1rem 0 0 1.5rem" : "1rem 0 0 0" }}>
          <AnimatePresence initial={false}>
            {navOn && (
              <motion.div
                className="nav-links-container col-c-fs"
                variants={screenSize === "MOBILE" ? navContentVariantsMobile : navContentVariants}
                initial={"hidden"}
                animate={navOn ? "visible" : "hidden"}
                exit={"hidden"}
              >
                {/* NAV LOGO */}
                <Link className="nav-links" href="/">
                  <img src={name_logo.src} alt="Johnny Wong" className="nav-logo" />
                </Link>

                {/* NAV MAIN LINKS */}
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
                  <a className={router.pathname === "/contact" ? "nav-active nav-link" : "nav-link"}>
                    Contact
                  </a>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* NAV SOCIALS */}
        <motion.div
          className="nav-socials-container row-c-c"
          variants={navSocialVariants}
          animate={navOn ? "visible" : "hidden"}
          transition={{ type: "spring", duration: 1, default: { ease: "easeInOut" } }}
        >
          <motion.a
            whileHover={{ color: "#b8406d" }}
            href="https://www.instagram.com/johnny.wong_/"
            target={"noreferrer"}
          >
            <AiOutlineInstagram />
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Nav;
