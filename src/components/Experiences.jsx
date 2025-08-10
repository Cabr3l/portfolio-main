import React from 'react';
import { Link } from 'react-router-dom';
import { experiencesData } from '../data/experiencesData';
import { ArrowRight } from 'lucide-react';

const Experiences = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white" id="experiences">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Experiences
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover my professional journey and the skills I've developed 
            through my various experiences in scientific mediation and finance.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-medium">
                {experiencesData.length} enriching experiences
              </span>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link 
              to="/experiences"
              className="inline-flex items-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-white/30"
            >
              View all experiences
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Experience content */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiencesData.map((experience, index) => (
              <div key={experience.id} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl hover:shadow-2xl 
              transform transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700">
                <div className="relative mb-6">
                  <img 
                    src={experience.image} 
                    alt={experience.poste} 
                    className="rounded-xl w-full h-56 object-cover shadow-lg"
                  />
                  {/* Experience type badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg ${
                    index === 0 ? 'bg-blue-600' : 'bg-red-600'
                  }`}>
                    {index === 0 ? 'Mediation' : 'Finance'}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{experience.poste}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">{experience.entreprise}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
                
                {/* Main skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {experience.skills?.slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          index === 0 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-red-600 hover:bg-red-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/experience/${experience.id}`} 
                  className={`inline-block w-full text-center py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl text-white ${
                    index === 0 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
