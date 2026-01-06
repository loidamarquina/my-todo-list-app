import React, { useState } from "react";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Contact form submitted:", formValues);
    alert("Thank you for your message!");

    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      comments: ""
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            className="text-input"
            type="text"
            value={formValues.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            className="text-input"
            type="text"
            value={formValues.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          className="text-input"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-field">
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          name="comments"
          className="textarea-input"
          rows="4"
          value={formValues.comments}
          onChange={handleChange}
          placeholder="Write your message..."
        />
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
