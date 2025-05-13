import React from 'react'
import Logo from "../assets/images/30482-01.jpeg";
import W1 from "../assets/images/Picsart_25-05-02_21-58-07-295.png";
import W2 from "../assets/images/Picsart_25-05-02_22-02-32-703.png";
import W3 from "../assets/images/Picsart_25-05-02_22-05-02-976.png";
import W4 from "../assets/images/Picsart_25-05-02_22-07-43-206.png";
import W5 from "../assets/images/Picsart_25-05-02_22-11-43-756.png";
import W6 from "../assets/images/Picsart_25-05-02_22-15-41-792.png";
import W7 from "../assets/images/Picsart_25-05-02_22-19-34-586.png";
import W8 from "../assets/images/Picsart_25-05-02_22-20-35-592.png";
function Services() {
  return (
    <>
    <div>
    
    <div className=" flex items-center justify-center min-h-screen mt-20" id='services'>
      
   
    <div className="relative w-[450px] md:w-[600px] lg:w-[800px]">

      
      <img
        src={Logo}
        alt="Base"
        className="w-full h-auto rounded-lg shadow-lg"
      />


      <a href="/Maintenance"><img
        src={W4}
        alt="Layer 1"
        className="absolute top-90 left-10 w-16 md:w-16 hover:scale-110 duration-300 cursor-pointer"
      /></a>

      
      <a href="/Toilet"><img
        src={W7}
        alt="Layer 2"
        className="absolute top-18 right-12 w-20 md:w-30 hover:scale-110 duration-300 cursor-pointer"
      /></a>

      
      <a href=""></a><img
        src={W8}
        alt="Layer 3"
        className="absolute top-1/3 right-5  w-32 md:w-20 hover:scale-110 duration-300 cursor-pointer"
      />

   
      <a href="/Cart"><img
        src={W1}
        alt="Layer 4"
        className="absolute bottom-9 left-10 w-20 md:w-27 hover:scale-110 duration-300 cursor-pointer"
      /></a>


      <a href=""></a><img
        src={W2}
        alt="Layer 5"
        className="absolute bottom-6 left-65 w-16 md:w-40 hover:scale-110 duration-300 cursor-pointer"
      />

  
      <a href="https://www.vspdesigns.com/service/appliances-setup/"><img
        src={W5}
        alt="Layer 6"
        className="absolute top-18 left-13 w-24 md:w-28 hover:scale-110 duration-300 cursor-pointer"
      /></a>

 
      <a href="/Inspection"><img
        src={W3}
        alt="Layer 7"
        className="absolute bottom-10 right-20 w-24 md:w-37 hover:scale-110 duration-300 cursor-pointer"
      /></a>

      <a href="/Leakage"><img
        src={W6}
        alt="Layer 8"
        className="absolute top-8 right-65 w-16 md:w-48 hover:scale-110 duration-300 cursor-pointer"
      /></a>

    </div>
  </div>
  </div>
  </>
  )
}

export default Services
