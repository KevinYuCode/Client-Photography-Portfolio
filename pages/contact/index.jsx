import React from "react";
import Header from "../../components/Header";
import MarginContainer from "../../components/MarginContainer";

function Contact() {
  return (
    <>
      <Header></Header>
      <MarginContainer>
        <div className="contact-container">
          <h1>Let\'s Talk, I\'d love to hear from you!</h1>
          <form className="contact-form col-fs-c">
            <input type="text" className="contact-name" />
            <input type="text" className="contact-email" />
            <textarea rows="5" cols="60" className="contact-message" />
          </form>
        </div>
      </MarginContainer>
    </>
  );
}

export default Contact;
