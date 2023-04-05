import React, { useState } from 'react';
import './about.css';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send contact information to your team
    // Display thank-you message to user
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
