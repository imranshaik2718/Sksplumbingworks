import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import About from './components/Abt'
// import Demo from './components/Demo'

function Homepage() {
  
  return (
    
    <div className='bg-gradient-to-b from-slate-900 to-gray-800 rounded-2xl shadow-lg'>
     <NavBar  /> 
     <Hero/>
     <Services/>
     <About/>
     <ContactForm/>
     {/* <Demo/> */}
  </div>
  ) 
}

export default Homepage
