import React from "react";
import homepic from "../assets/moi2.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={homepic}
            alt="Cabrel Tiotsop Ngueguim"
            className="w-72 h-80 rounded-2xl object-cover mb-8 md:mb-0 shadow-2xl hover-lift"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
              I am a passionate third year student at École Polytechnique with a strong focus in quantitative finance and applied mathematics. With a solid foundation in both mathematics and computer sciences, I specialize in stochastics, machine learning, and risk modeling. Through my projects in forex market prediction, portfolio optimization, and ESG modeling at Abeille Assurances, I've developed expertise in applying theoretical concepts to real-world financial challenges.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <label className="w-3/12 font-medium text-gray-700 dark:text-gray-300">
                  Stochastics
                </label>
                <div className="grow bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full 
                    transform transition-all duration-500 ease-out w-10/12"
                    style={{ animation: 'slideIn 1s ease-out' }}
                  ></div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-400">85%</span>
              </div>
              <div className="flex items-center">
                <label className="w-3/12 font-medium text-gray-700 dark:text-gray-300">
                  Machine Learning
                </label>
                <div className="grow bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full 
                    transform transition-all duration-500 ease-out w-11/12"
                    style={{ animation: 'slideIn 1.2s ease-out' }}
                  ></div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-400">92%</span>
              </div>
              <div className="flex items-center">
                <label className="w-3/12 font-medium text-gray-700 dark:text-gray-300">
                  Risk Modeling
                </label>
                <div className="grow bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full 
                    transform transition-all duration-500 ease-out w-9/12"
                    style={{ animation: 'slideIn 1.4s ease-out' }}
                  ></div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-400">78%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover-lift shadow-lg">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  6+
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover-lift shadow-lg">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  2
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Professional Experiences</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Expertise Areas:</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Quantitative Finance & Risk Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Machine Learning & Data Science</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Stochastic Processes & Optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Scientific Communication & Pedagogy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">ESG Modeling & Sustainable Finance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
