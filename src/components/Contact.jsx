import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import React, { useState } from 'react'

const Contact = () => {
   const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   const mailtoLink = `mailto:ngueguimbidias@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;
  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing quantitative finance projects, machine and deep learning projects.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:idias.tiotsop-ngueguim@polytechnique.fr" className='hover:underline'>
                    bidias.tiotsop-ngueguim@polytechnique.fr
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+33 744866598</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Palaiseau, France</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    name="name"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Name'
                    value={form.name}
                    onChange={handleChange}
            />
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="text" 
                    name='email'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email'
                     value={form.email}
            onChange={handleChange}
            />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text"
                    name='message' 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'
                     value={form.message}
            onChange={handleChange}/>
                </div>
                 <a
          href={mailtoLink}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full inline-block text-center'
        >
          Send
        </a></form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact