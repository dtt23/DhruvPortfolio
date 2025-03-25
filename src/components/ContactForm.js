import React, { useState, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .success-message {
    color: green;
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pfibo0e', 'template_1eymvwo', form.current, {
        publicKey: 'W_4NBa24jpySemCTx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Your message has been sent successfully!');
          setName('');
          setEmail('');
          setMessage('');

          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('Failed to send. Please try again.');
        }
      );
  };

  return (
    <FormStyle ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Send</button>
      <p className="success-message">{successMessage}</p>
    </FormStyle>
  );
}
