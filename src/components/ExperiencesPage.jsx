import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Calendar, Users, Target, TrendingUp, MapPin, Building } from "lucide-react";
import { experiencesData } from '../data/experiencesData';

export default function ExperiencesPage() {
    useEffect(() => {
        document.title = "Cabrel Tiotsop Ngueguim - Expériences Professionnelles";
    }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <Link 
            to="/" 
            className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">My Experiences</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover my professional journey through various roles in data science, machine learning, and scientific mediation.
              Each experience has contributed to my growth and expertise in different domains.
            </p>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiencesData.map((experience) => {
              const isBlueTheme = experience.id === 1;
              const primaryGradient = isBlueTheme 
                ? "from-blue-500 to-blue-600" 
                : "from-red-500 to-red-600";
              const secondaryGradient = isBlueTheme 
                ? "from-blue-600 to-blue-700" 
                : "from-red-600 to-red-700";

              return (
                <div key={experience.id} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl hover:shadow-2xl 
                  transform transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${primaryGradient} -m-8 mb-6 p-6 text-white rounded-t-2xl`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                        {experience.poste}
                      </span>
                      <span className="text-white/80 text-sm">
                        {experience.entreprise}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{experience.poste}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.periode}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{experience.lieu}</span>
                    </div>

                    {/* Skills */}
                    {experience.skills && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.slice(0, 5).map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${secondaryGradient} text-white rounded-full text-xs font-medium`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {experience.technologies && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects count */}
                    {experience.projects && (
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Target className="w-4 h-4 mr-2" />
                        <span>{experience.projects.length} projects completed</span>
                      </div>
                    )}

                    {/* View Details button */}
                    <Link 
                      to={`/experience/${experience.id}`}
                      className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${primaryGradient} hover:${secondaryGradient} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statistics section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {experiencesData.length}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Companies worked with</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {experiencesData.reduce((total, exp) => total + (exp.projects?.length || 0), 0)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Projects completed</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {experiencesData.reduce((total, exp) => total + (exp.achievements?.length || 0), 0)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
