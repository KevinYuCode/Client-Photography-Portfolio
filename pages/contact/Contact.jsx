import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ifttt_message, validateEmail, validateMessage, validateName } from "../../utils/contactUtils";
import { useSelector, useDispatch } from "react-redux";
import { setContactEmail, setContactMessage, setContactName } from "../../redux/contact/contact";
import { useScrollDirection } from "react-use-scroll-direction";
import { setImageOn, setScrollDirection } from "../../redux/gallery/gallery";
import { setIsTopPage } from "../../redux/nav";

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

function Contact() {
  const dispatch = useDispatch();
  const { contactName, contactEmail, contactMessage } = useSelector(({ contactState }) => contactState);
  const { isTopPage} = useSelector(({ navState }) => navState);
  const [validMessage, setValidMessage] = useState(false);
  const { isScrollingUp, isScrollingDown, scrollTargetRef } = useScrollDirection();

  const sendMessage = () => {
    if (validMessage) ifttt_message(contactName, contactEmail, contactMessage);
  };

  const setName = (e) => {
    if (validateName(e.target.value)) dispatch(setContactName(e.target.value));
  };

  const setEmail = (e) => {
    let { validLength } = validateEmail(e.target.value);
    if (validLength) dispatch(setContactEmail(e.target.value));
  };

  const setMessage = (e) => {
    if (validateMessage(e.target.value)) dispatch(setContactMessage(e.target.value));
  };

  useEffect(() => {
    if (contactName !== "" && contactMessage.length > 0) {
      setValidMessage(true);
    } else {
      setValidMessage(false);
    }
  }, [contactName, contactEmail, contactMessage]);

  useEffect(() => {
    if (!isTopPage) {
      if (isScrollingUp) dispatch(setScrollDirection("UP"));
      else if (isScrollingDown) dispatch(setScrollDirection("DOWN"));
    }
  }, [isScrollingUp, isScrollingDown]);

  useEffect(() => {
    let el = document.getElementById("contact");
    el.addEventListener("scroll", (e) => {
      if (e.target.scrollTop >= 0 && e.target.scrollTop < 2) {
        dispatch(setIsTopPage(true));
        dispatch(setScrollDirection("UP"));
      } else {
        dispatch(setIsTopPage(false));
      }
    });
    return () => {
      dispatch(setImageOn(false));
      el.removeEventListener("scroll", (e) => {
        if (e.target.scrollTop >= 0 && e.target.scrollTop < 2) {
          dispatch(setIsTopPage(true));
          dispatch(setScrollDirection("UP"));
        } else {
          dispatch(setIsTopPage(false));
        }
      });
    };
  }, []);

  return (
    <div id="contact" className="contact-container col-c-c" ref={scrollTargetRef}>
      <motion.div
        className="contact-content col-fs-c"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1>
          Let's Connect! <br />
          I'd love to hear from you.
        </h1>
        <input
          type="text"
          placeholder="Name"
          value={contactName}
          onChange={(e) => {
            setName(e);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={contactEmail}
          onBlur={(e) => {
            setEmail(e, true);
          }}
          onChange={(e) => {
            setEmail(e);
          }}
        />
        <textarea
          type="text"
          placeholder="Message"
          value={contactMessage}
          onChange={(e) => {
            setMessage(e);
          }}
        />
        <button
          onClick={() => {
            sendMessage();
          }}
          disabled={!validMessage}
          style={{ opacity: validMessage ? 1 : 0.7, cursor: validMessage ? "pointer" : "default" }}
        >
          Send
        </button>
      </motion.div>
    </div>
  );
}

export default Contact;
