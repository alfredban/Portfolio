import { useEffect, useRef } from 'react';
import {proyectos} from '../data/ProjectsList'


export default function Projects() {

return(

  


  <div className='projects md:h-500  h-1150 text-center w-full' id='Proyectos'>

        <h1 className='text-white text-6xl mb-30' style={{ fontFamily: '"Raleway", system-ui' }}>Proyectos</h1>


    <div className="projects-grid md:grid md:grid-cols-3 gap-10 justify-items-center  grid-cols-1 ">
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className=" sobre-mi-card ml-10 mr-10 transition-transform duration-300 hover:scale-110 md:h-120 md:w-140 h-auto w-90 mb-10"> 
        <div className="flex items-center justify-center">
            <img className="md:h-50 md:w-80 h-25 w-40 object-cover rounded-2xl border-2 border-gray-500 " src={proyecto.imagen} alt={proyecto.nombre} />
        </div>
          <h2>{proyecto.nombre}</h2>
          <span>{proyecto.descripcion}</span>
          <div className="tags ">
            <span>Tecnologias: </span>
            
            <span> {proyecto.tecnologias.join(", ")}</span>

          </div>
          <a className="text-blue-500" href={proyecto.link}>Ver código</a>
        </div>
      ))}
    </div>

  </div>


  );  
}
