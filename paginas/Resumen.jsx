import resume from "../src/data/resume";
import React from 'react';
import { Link } from "react-router-dom";
import "../routes/Routes.css"


function Resume (){
    return(
    <>
      <h1>Currículum</h1>
      <section>
        <h2>Experiencia Laboral</h2>
        <ul>
          {resume.experiences.map((experience) => (
            <li key={experience.id}>
              <h3>{experience.title} en {experience.company}</h3>
              <p>{experience.date}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Educación</h2>
        <ul>
          {resume.studies.map((study) => (
            <li key={study.id}>
              <h3>{study.title}</h3>
              <p>{study.institution}</p>
              <p>{study.date}</p>
            </li>
          ))}
        </ul>
      </section>
      <nav className="link-container">
            <Link to="/">Volver a la home</Link>
            <Link to="/projects">Ver proyectos</Link>
      </nav>
    </>
  );
}

export default Resume
    
    