import React from "react";
import "./Contact.css";

const ContactSection = () => {
  return (
    <div className="container">
      <div className="contact-info-div" style={{ animationName: 'slideInFromLeft' }}>
        <div className="the-header">
          <div className="cdash"></div>
          <h3>CONTACT ME</h3>
        </div>
        <h1>Drop Me A Message</h1>
        <p className="contact-text">
          Ready to start your next project or need a savvy tech partner <br /> to bring
          your ideas to life? <br /> Drop me a line! I’m here to answer any
          questions and provide the guidance and<br /> expertise you need to turn your
          vision into reality.
        </p>
        <div className="contact-icon"></div>
      </div>
      <div className="msg-input" style={{ animationName: 'slideInFromRight' }}>
        <form action="" className="msg-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Email header" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder=" Type your Message here"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    
    </div>
  );
};

export default ContactSection;
