// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../routes/Routes.css"


function Home() {
    return (
      <>
        <h1>Bienvenido al Portafolio</h1>
        <p>Este es el portafolio de un desarrollador web.</p>
        <nav className="link-container">
            <Link to="/resume">Ver Currículum</Link>
            <Link to="/projects">Ver proyectos</Link>
        </nav>
      </>
    );
  }
  
  export default Home;


