import React, { useState } from "react";
import "./Contact.css";

const EMAIL_REG = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isEmail = (str) => EMAIL_REG.test(str);

function Contact() {
  const [errors, setError] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const errors = [];
    if (!name) {
      errors.push("Name is required");
    }
    if (!email) {
      errors.push("Email is required");
    } else if (!isEmail(email)) {
      errors.push("Invalid email");
    }
    if (!message) {
      errors.push("Message is required");
    }
    setError(errors);
    console.log(name, email, message);
  };

  return (
    <div>
      <section>
        <h2>If you would like to get in contact, please fill out this form:</h2>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        {errors.map((error, index) => (
          <span key={index}>{error}</span>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
