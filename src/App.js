import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ContactForm from './ContactForm';
import Footer from './Footer';

function App() {
  return (
    <div
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}
    >
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;