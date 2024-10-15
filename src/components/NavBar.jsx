import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className='text-white px-8 md:px-16 lg:px-24' style={{ backgroundColor: '#020027' }}>
      <div className='container py-2 flex justify-between items-center'>
        <div className='md:hidden flex items-center'>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='text-white focus:outline-none'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>

        
        <div className='text-2xl font-bold hidden md:inline'>Shruti</div>
        
       
        <div className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-6 absolute md:static bg-[#020027] md:bg-transparent top-14 left-0 ${isOpen ? 'flex' : 'hidden'}`}>
          <a href="#Home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

       
        <div className='text-2xl font-bold ml-auto md:hidden'>Shruti</div>

        
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect With Me</button>
      </div>
    </nav>
  )
}

export default NavBar;



