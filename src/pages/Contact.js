import React, { useState } from "react";
import "./global.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="contact-page">
      <h1 className="title">Get in Touch</h1>
      <p className="subtitle">Have questions? We'd love to hear from you!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Tell us what's on your mind..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" className="send-btn">Send Message</button>
      </form>

      {status && <p className="status">{status}</p>}

      <div className="email-box">
        <span className="icon">📧</span>
        <div>
          <p>Email Us</p>
          <a href="mailto:support@codelearn.com">support@codelearn.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
