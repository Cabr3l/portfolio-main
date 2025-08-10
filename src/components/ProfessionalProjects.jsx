import React from 'react';
import { Link } from 'react-router-dom';
import { experiencesData } from '../data/experiencesData';
import { ArrowRight, Calendar, Users, Target, Building } from 'lucide-react';

const ProfessionalProjects = () => {
  // Récupérer tous les projets de toutes les expériences
  const allProjects = experiencesData.flatMap(experience => 
    experience.projects.map((project, projectIndex) => ({
      ...project,
      experienceId: experience.id,
      experienceTitle: experience.poste,
      company: experience.entreprise,
      projectIndex
    }))
  );

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white" id="professional-projects">
      {/* Banner */}
      <div className="bg-green-600 py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the key projects I've worked on during my professional experiences, 
            showcasing my skills in scientific mediation and financial modeling.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-medium">
                {allProjects.length} professional projects completed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => {
              const isMediation = project.experienceId === 1;
              const primaryColor = isMediation ? 'blue' : 'red';
              const bgGradient = isMediation 
                ? 'from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900'
                : 'from-red-50 to-pink-100 dark:from-red-900 dark:to-pink-900';

              return (
                <div key={`${project.experienceId}-${project.projectIndex}`} 
                     className={`bg-gradient-to-br ${bgGradient} p-6 rounded-2xl hover:shadow-2xl 
                     transform transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700`}>
                  
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-white rounded-full text-xs font-medium ${
                        isMediation ? 'bg-blue-600' : 'bg-red-600'
                      }`}>
                        {isMediation ? 'Scientific Mediation' : 'Finance & Insurance'}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Project {project.projectIndex + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    {project.tutor && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-medium">Tutor:</span> {project.tutor}
                      </div>
                    )}
                    {project.duration && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">Duration:</span> {project.duration}
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">Company:</span> {project.company}
                    </div>
                  </div>

                  {/* Technical Approach Preview */}
                  {project.technicalApproach && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Technical Approach
                      </h4>
                      <div className="space-y-1">
                        {project.technicalApproach.slice(0, 2).map((approach, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{approach}</p>
                          </div>
                        ))}
                        {project.technicalApproach.length > 2 && (
                          <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                            +{project.technicalApproach.length - 2} more approaches
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* View Details Button */}
                  <Link 
                    to={`/experience/${project.experienceId}/project/${project.projectIndex}`}
                    className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl text-white ${
                      isMediation 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to know more about my experiences?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Explore my complete professional journey and discover how these projects have shaped my skills and expertise.
              </p>
              <Link 
                to="/experiences"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Experiences
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProjects;
