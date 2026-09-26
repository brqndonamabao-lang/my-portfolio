import React from 'react';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#0b4658',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '15px',
        padding: '20px 30px',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >

      {/* LOGO */}
      <div
        style={{
          flex: '1 1 120px',
          minWidth: 0
        }}
      >
        <h2
          style={{
            margin: 0,
            color: 'white'
          }}
        >
          team<br />cherry
        </h2>
      </div>


      {/* NAVIGATION LINKS */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          gap: '20px',
          flex: '1 1 300px',
          minWidth: 0
        }}
      >

        <a
          href="#home"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px'
          }}
        >
          HOME
        </a>

        <a
          href="#about"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px'
          }}
        >
          ABOUT
        </a>

        <a
          href="#contact"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px'
          }}
        >
          CONTACT
        </a>

      </div>

    </nav>
  );
}

export default Navbar;