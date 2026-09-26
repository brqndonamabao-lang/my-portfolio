import React from 'react';

function Navbar() {
  return (
    <nav style={{
      height: '85px',
      backgroundColor: '#0c3548',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 45px',
      boxSizing: 'border-box'
    }}>

        <span style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          team cherry
        </span>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        gap: '45px'
      }}>

        <a
          href="#home"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '25px',
            fontWeight: 'bold'
          }}
        >
          HOME
        </a>

        <a
          href="#about"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '25px',
            fontWeight: 'bold'
          }}
        >
          ABOUT
        </a>

        <a
          href="#contact"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '25px',
            fontWeight: 'bold'
          }}
        >
          CONTACT
        </a>

      </div>

    </nav>
  );
}

export default Navbar;