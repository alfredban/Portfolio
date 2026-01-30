import { useEffect, useRef } from 'react';


export default  function Nav(){
return(
<div className=" navbar fixed top-0 left-0 z-50 bg-base-100 shadow-md hover:shadow-xl transition  mx-auto  md:w-full w-full h-16 items-center justify-center md:text-2xl bg-white  slide-in-top text-1x1 flex "
style={{ fontFamily: '"Raleway", system-ui' }}>                                                                                
  <div className="flex-1 ">
    <a className=" text-1x1 md:text-4xl btn btn-ghost  md:ml-7 ml-2 text-[#171430] ">Alfredo Ivanovich</a>
  </div>
  <div className="flex gap-2">
    <div className="dropdown dropdown-end flex transition-all">
    <ul className="flex gap-4 md:gap-8 md:mr-20 mr-10 items-center">

    <li className="transition-transform duration-300 hover:scale-110">
      <a href="#Sobre-mi" className="text-[#171430] hover:text-blue-600 transition-colors ">Sobre mi</a>
    </li>

    <li className="transition-transform duration-300 hover:scale-110">
      <a href="#Proyectos" className="text-[#171430] hover:text-blue-600 transition-colors">Proyectos</a>
    </li>

    </ul>
    </div>

  </div>
</div>
)
}