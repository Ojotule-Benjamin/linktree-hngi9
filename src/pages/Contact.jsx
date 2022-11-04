import React, { useState, useEffect } from "react";
import { FooterSection } from "../components/FooterSection";
import "../pages/contact.scss";

const Contact = () => {
  const name = "Ojotule Benjamin Ajodo";

  //setting state for the initial values, formvalues, errors, submit
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //handle the changes in the input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); //[name] is the key
    //console.log(formValues);
  };

  //handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]); //added the formvalues, isSubmit *look into this

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    } else if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  return (
    <div className="ContactContainer">
      <div className="ContactWrapper">
        {/* header*/}
        <header className="header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>

        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        {/* Form data*/}
        <form onSubmit={handleSubmit}>
          <section className="nameRow">
            <div className="firstName">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                id="first_name"
                name="firstName"
                placeholder="Enter your first name"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="lastName">
              <label>Last Name</label>
              <input
                type="text"
                id="last_name"
                name="lastName"
                placeholder="Enter your last name"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
          </section>

          <section className="emailField">
            <label htmlFor="" className="inputWithLabels">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourname@email.com"
              className="inputField"
              value={formValues.email}
              onChange={handleChange}
            />
          </section>

          <section className="messageField">
            <label htmlFor="" className="inputWithLabels">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
            <p>{formErrors.message}</p>
          </section>

          <section className="checkboxField">
            <input type="checkbox" id="check_box" required />
            <label htmlFor="">
              You agree to providing your data to {name} who may contact you
            </label>
          </section>
          <button id="btn__submit">Send message</button>
        </form>
      </div>

      <FooterSection />
    </div>
  );
};

export default Contact;
