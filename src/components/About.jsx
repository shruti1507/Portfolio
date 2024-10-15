import React from 'react'
import AboutImage from '../assets/heroimg.jpg'
const About = () => {
  return (
    <div className=" text-white py-20" id="about" style={{ backgroundColor: '#020027' }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img src={AboutImage} alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
            <div className='flex-1'>
            <p className="text-lg mb-8">
            I'm cruising through my B.Tech in Computer Science at SRM University fueled by a deep passion for Web
            Development.My Mission is to rock the academic scene while creating real-world web wonders that bring smile to faces.
            </p>
            <div className='space-y-4'>
            <div className='flex flex-col md:flex-row items-center'>
    <label htmlFor="HTMLandCSS" className='w-full md:w-2/12 mb-2 md:mb-0'>HTML & CSS</label>
    <div className='grow bg-gray-200 rounded-full h-2.5 w-full md:w-auto'>
        <div className='bg-gradient-to-r from-pink-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
    </div>
</div>

<div className='flex flex-col md:flex-row items-center'>
    <label htmlFor="HTMLandCSS" className='w-full md:w-2/12 mb-2 md:mb-0'>JavaScript</label>
    <div className='grow bg-gray-200 rounded-full h-2.5 w-full md:w-auto'>
        <div className='bg-gradient-to-r from-pink-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'></div>
    </div>
</div>

<div className='flex flex-col md:flex-row items-center'>
    <label htmlFor="HTMLandCSS" className='w-full md:w-2/12 mb-2 md:mb-0'>React Js</label>
    <div className='grow bg-gray-200 rounded-full h-2.5 w-full md:w-auto'>
        <div className='bg-gradient-to-r from-pink-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-3/12'></div>
    </div>
</div>

<div className='flex flex-col md:flex-row items-center'>
    <label htmlFor="HTMLandCSS" className='w-full md:w-2/12 mb-2 md:mb-0'>C++</label>
    <div className='grow bg-gray-200 rounded-full h-2.5 w-full md:w-auto'>
        <div className='bg-gradient-to-r from-pink-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'></div>
    </div>
</div>


            </div>
            <div className='mt-12 flex justify-between text-center'>
                <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        1+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        5+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        1+
                    </h3>
                    <p>Internship</p>
                </div>

            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
