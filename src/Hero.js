import React from 'react';

function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundColor: '#032534',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 30px',
        gap: '30px',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >

      {/* TEXT */}
      <div
        style={{
          color: 'white',
          flex: '1 1 280px',
          minWidth: 0
        }}
      >

        <h1 style={{ fontSize: '42px' }}>
          HI! I'M KEIFFER
        </h1>

        <h2 style={{ color: '#e63946' }}>
          WEB DESIGNER
        </h2>

        <p style={{ fontSize: '20px' }}>
          In Team Cherry a small indie games team
          in Adelaide, South Australia.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >

          <a
            href="#about"
            style={{
              backgroundColor: '#f2f2f2',
              color: 'black',
              padding: '15px 25px',
              borderRadius: '10px',
              textDecoration: 'none'
            }}
          >
            VIEW MY WORK
          </a>

          <a
            href="#contact"
            style={{
              backgroundColor: '#a92d35',
              color: 'white',
              padding: '15px 25px',
              borderRadius: '10px',
              textDecoration: 'none'
            }}
          >
            CONTACT ME
          </a>

        </div>

      </div>


      {/* IMAGE */}
      <div
        style={{
          flex: '1 1 250px',
          minWidth: 0,
          display: 'flex',
          justifyContent: 'center'
        }}
      >

        <img
          src="/boss_lace.png"
          alt="Character"
          style={{
            width: '100%',
            maxWidth: '350px',
            height: 'auto'
          }}
        />

      </div>

    </section>
  );
}

export default Hero;