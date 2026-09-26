import React, { useState } from 'react';

function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }

    alert(`Thank you ${name}, your message has been sent!`);

    setName('');
    setEmail('');
    setMessage('');
    setError('');
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#514d4f',
        color: 'white',
        padding: '50px 20px'
      }}
    >

      <h2 style={{
        textAlign: 'center'
      }}>
        CONTACT ME
      </h2>


      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '450px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >

        <label>Name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: '12px'
          }}
        />


        <label>Email:</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '12px'
          }}
        />


        <label>Message:</label>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            padding: '12px',
            height: '100px'
          }}
        />


        {error && (
          <p style={{
            color: '#ff5555'
          }}>
            {error}
          </p>
        )}


        <button
          type="submit"
          style={{
            padding: '14px',
            backgroundColor: '#a92d35',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          SEND
        </button>

      </form>


      <p style={{
        textAlign: 'center',
        fontSize: '12px'
      }}>
        Your data will only be used to contact you.
        We do not store or share your information.
      </p>

    </section>
  );
}

export default ContactForm;