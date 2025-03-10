import projects from "../src/data/projects";
import React from "react";
import { Link } from "react-router-dom";
import "../routes/Routes.css"
 function Projects(){
    return (
        <>
        <h1>Proyectos</h1>
        <ul>
            {projects.map((project)=>(
                <li key={project.id}>
                    <h2>{project.name}</h2>
                    <img src={project.image} alt={project.name} />
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    
                </li>
            ))}
                <nav className="link-container">
                    <Link to="/">Volver a la home</Link>
                    <Link to="/resume">Ver Currículum</Link>
                </nav>
        </ul>
        </>
    )
 }
 export default Projects