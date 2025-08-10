import React from 'react'
import homepic from '../assets/tete.png'

const Home = () => {
  return (
    <div className=' text-black dark:bg-black dark:text-white text-center py-16'>
        <div className="flex justify-center">
          <div className="w-50 h-50 rounded-full bg-white dark:bg-black p-2 shadow-lg flex items-center justify-center overflow-hidden">
        <img src={homepic} alt="" 
        className='w-48 h-48 object-COVER rounded-full'/>
          </div>
        </div>
        <h1 className='text-4xl font-bold  bg-white text-black dark:bg-black dark:text-white'>
            I'm {" "}
            <span className='text-blue-600 dark:text-blue-400'>Cabrel</span>
            , third year student at Ecole polytechnique. 
        </h1>
        <p className='mt-4 text-lg text-black-300'>
            I am in the applied mathematics department, and I'm specialized in stochastics and quantitative finance.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-blue-600 hover:bg-blue-700 text-white
            transform transition-all duration-300 hover:scale-105 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl'
            onClick={() => window.location.href = '#contact'}>
            Contact With Me</button>
            <button
            className='bg-gray-700 hover:bg-gray-800 text-white
            transform transition-all duration-300 hover:scale-105 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl'
            onClick={() =>{window.open('/resume.png', '_blank','w-800,h-800');
            }}
            >Resume</button>
        </div>
    </div>
  )
}
export default Home