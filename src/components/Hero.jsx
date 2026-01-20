import fotoCV from '../assets/fotoCV.jpg'

export default  function Nav(){
return(

   <div className='flex bg-[#171430]'>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex">
        <div className="w-90 h-90 rounded-full overflow-hidden mr-7 border-2 ml-80 mt-50 shadow-2xl transition mb-50 flex" >
    <img 
    src={fotoCV}
             alt="Foto CV"
             className="w-full h-full object-cover" 
    />
    </div>   
    </div>

    <div className="flex flex-col ml-60 mt-60 text-6xl text-white "
    style={{ fontFamily: '"Raleway", system-ui' }} >
        <h1 className="transition-transform duration-300 hover:scale-130">Alfredo Ivanovich</h1>
         <h2 className="text-4xl opacity-80 transition-transform duration-300 hover:scale-130">Portfolio web</h2>
         <a className=" ml-45  text-2xl opacity-80 transition-transform duration-300 hover:scale-130"
            href='https://raw.githubusercontent.com/alfredban/CV-link-/main/CV-%20Ivanovich%20Alfredo.pdf'>
            Descargar CV</a>
        
    </div>






   </div> 

)


}