import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  return (
    <footer className=" bg-white text-black dark:bg-black dark:text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400">
            {personalInfo.title}, specializing in {personalInfo.specialization}
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href={personalInfo.socialMedia.telegram} className="text-gray-400 hover:text-white" target="_blank">
              <FaTelegram />
            </a>
            <a href={personalInfo.socialMedia.x} className="text-gray-400 hover:text-white" target="_blank" >
              <FaXTwitter />
            </a>
            <a href={personalInfo.socialMedia.linkedin} className="text-gray-400 hover:text-white" target="_blank">
              <FaLinkedin />
            </a>
            <a href={personalInfo.socialMedia.github} className="text-gray-400 hover:text-white" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
