import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ifttt_message,
  validateEmail,
  validateMessage,
  validateName,
} from "../../utils/contactUtils";
import { useSelector, useDispatch } from "react-redux";
import {
  setContactEmail,
  setContactMessage,
  setContactName,
} from "../../redux/contact/contact";
import axios from "axios";

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

const BASE_URL =
  "https://maker.ifttt.com/trigger/{event}/json/with/key/n3S4vjj2V3Uav861ZholmkgmNsyPwH_osXaBD5nvqs2";
const sendEmail = () => {};

function Contact() {
  const dispatch = useDispatch();
  const { contactName, contactEmail, contactMessage } = useSelector(
    ({ contactState }) => contactState
  );
  const [validMessage, setValidMessage] = useState(false);

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
    if (validateMessage(e.target.value))
      dispatch(setContactMessage(e.target.value));
  };

  useEffect(() => {
    if (contactName !== "" && contactMessage.length > 0) {
      setValidMessage(true);
    } else {
      setValidMessage(false);
    }
  }, [contactName, contactEmail, contactMessage]);

  return (
    <div id="contact" className="contact-container col-c-c">
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
        <a href="mailto:wong.c.johnny@gmail.com">Contact Me</a>
        {/* <input
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
        </button> */}
      </motion.div>
    </div>
  );
}

export default Contact;
