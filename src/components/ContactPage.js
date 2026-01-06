import React from "react";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">
        Have questions or feedback? Fill out the form and we will get back to you.
      </p>
      <div className="contact-card">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
