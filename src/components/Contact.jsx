import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import React, { useState } from 'react'
import { personalInfo } from '../data/personalInfo'

const Contact = () => {
   const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-blue-600 mb-4'>Let's Talk</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm open to discussing {personalInfo.interests.join(', ')}.
            </p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-blue-600 mr-2'></FaEnvelope>
                <a href={`mailto:${personalInfo.email}`} className='hover:underline text-gray-700 dark:text-gray-300'>
                    {personalInfo.email}
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-blue-600 mr-2'></FaPhone>
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.phone}</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-blue-600 mr-2'></FaMapMarkedAlt>
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.address}</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2 font-medium'>Your Name</label>
                    <input type="text" 
                    name="name"
                    className='w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800'
                    placeholder='Enter Your Name'
                    value={form.name}
                    onChange={handleChange}
            />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2 font-medium'>Email</label>
                    <input type="email" 
                    name='email'
                    className='w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800'
                    placeholder='Enter Your Email'
                     value={form.email}
            onChange={handleChange}
            />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2 font-medium'>Message</label>
                    <textarea 
                    name='message' 
                    className='w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800'
                    rows="5"
                    placeholder='Enter Your Message'
                     value={form.message}
            onChange={handleChange}/>
                </div>
                 <a
          href={mailtoLink}
          className='bg-blue-600 hover:bg-blue-700 text-white
          transform transition-all duration-300 hover:scale-105 px-8 py-3 rounded-lg inline-block text-center font-medium'
        >
          Send Message
        </a></form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact