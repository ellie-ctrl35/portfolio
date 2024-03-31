import React from "react";
import "./Contact.css";

const ContactSection = () => {
  return (
    <div className="container">
      <div className="contact-info-div"></div>
      <div className="msg-input">
        <svg className="svg" viewBox="0 0 250 300" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E63946"
            d="M37,-68.1C44.9,-59.4,46.3,-43.5,52.4,-30.9C58.4,-18.4,69.1,-9.2,68.7,-0.2C68.3,8.7,56.8,17.5,50.3,29.1C43.7,40.8,42.1,55.5,34.5,67.6C27,79.7,13.5,89.2,2.1,85.5C-9.2,81.9,-18.5,65,-29.1,54.6C-39.8,44.3,-51.8,40.6,-61.3,32.6C-70.8,24.6,-77.8,12.3,-78.1,-0.2C-78.4,-12.7,-72.1,-25.3,-64.2,-36C-56.2,-46.7,-46.6,-55.5,-35.7,-62.4C-24.7,-69.3,-12.4,-74.5,1.1,-76.3C14.5,-78.2,29,-76.8,37,-68.1Z"
            transform="translate(100 100)"
          />
        </svg>
        {/*<form action="" className="msg-form">
            <h1>Contact Me</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
        </form>*/}
      </div>
    </div>
  );
};

export default ContactSection;
