import React, { useState } from "react";
import { FooterSection } from "../components/FooterSection";
import "../pages/contact.scss";

const Contact = () => {
  const name = "Ojotule Benjamin Ajodo";
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="ContactContainer">
      <div className="ContactWrapper">
        {/* header*/}
        <header className="header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>

        {/* Form data*/}
        <form onSubmit={handleSubmit}>
          <section className="nameRow">
            <div className="firstName">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                id="first_name"
                name=""
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="lastName">
              <label>Last Name</label>
              <input
                type="text"
                id="last_name"
                name=""
                placeholder="Enter your last name"
                required
              />
            </div>
          </section>

          <section className="emailField">
            <label htmlFor="" className="inputWithLabels">
              Email
            </label>
            <input
              type="email"
              id=""
              name=""
              placeholder="yourname@email.com"
              className="inputField"
              required
            />
          </section>

          <section className="messageField">
            <label htmlFor="" className="inputWithLabels">
              Message
            </label>
            <textarea
              id="message"
              name=""
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </section>

          <section className="checkboxField">
            <input type="checkbox" id="" name="" required />
            <label htmlFor="">
              You agree to providing your data to {name} who may contact you
            </label>
          </section>
          {message && <span>Please enter a message</span>}
        </form>

        <button id="btn__submit">Send message</button>
      </div>

      <FooterSection />
    </div>
  );
};

export default Contact;
