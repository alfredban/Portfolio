import { useEffect, useRef } from 'react';
import {proyectos} from '../data/ProjectsList'


export default function Projects() {

return(


<div className='projects' id='Proyectos'>

    <div className="projects-grid">
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="sobre-mi-card"> 
          <h3>{proyecto.titulo}</h3>
          <p>{proyecto.descripcion}</p>
          <div className="tags">
            {proyecto.tecnologias.map(tech => <span key={tech}>{tech}</span>)}
          </div>
          <a href={proyecto.link}>Ver código</a>
        </div>
      ))}
    </div>


</div>
  );  
}
