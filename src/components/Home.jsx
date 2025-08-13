import React from 'react'
import homepic from '../assets/tete.png'

const Home = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white text-center py-20' id="home">
        <div className="flex justify-center mb-8">
          <div className="w-50 h-50 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-3 shadow-2xl flex items-center justify-center overflow-hidden animate-float">
        <img src={homepic} alt="Cabrel Tiotsop Ngueguim" 
        className='w-48 h-48 object-cover rounded-full shadow-lg'/>
          </div>
        </div>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            I'm {" "}
            <span className='text-blue-600 dark:text-blue-400'>Cabrel</span>
            , third year student at École Polytechnique. 
        </h1>
        <p className='mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed'>
            I am in the applied mathematics department, and I'm specialized in stochastics and quantitative finance.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
            className='bg-blue-600 hover:bg-blue-700 text-white
            transform transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl'
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me</button>
            <button
            className='bg-gray-700 hover:bg-gray-800 text-white
            transform transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl'
            onClick={() => window.open('/resume.png', '_blank')}
            >View Resume</button>
            <button
            className='bg-purple-600 hover:bg-purple-700 text-white
            transform transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl'
            onClick={() => document.getElementById('thoughts').scrollIntoView({ behavior: 'smooth' })}>
            Mes Réflexions</button>
        </div>
    </div>
  )
}
export default Home