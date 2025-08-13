import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { experiencesData } from '../data/experiencesData';

export default function ProjectDetail() {
    const { experienceId, projectId } = useParams();
    
    // Trouver l'expérience et le projet
    const experience = experiencesData.find(exp => exp.id === parseInt(experienceId));
    const project = experience?.projects[parseInt(projectId)];

    useEffect(() => {
        if (project) {
            document.title = `Cabrel Tiotsop Ngueguim - ${project.title} | Projet`;
        } else {
            document.title = "Cabrel Tiotsop Ngueguim - Projet";
        }
    }, [project]);

    if (!experience || !project) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Return to home
            </Link>
          </div>
        </div>
      );
    }

    // Déterminer le type d'expérience pour le style
    const isMediation = experience.id === 1;
    const primaryColor = isMediation ? 'blue' : 'red';
    const bgGradient = isMediation 
      ? 'from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900'
      : 'from-red-50 to-pink-100 dark:from-red-900 dark:to-pink-900';

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className={`bg-gradient-to-r from-${primaryColor}-600 via-${primaryColor === 'blue' ? 'purple' : 'orange'}-600 to-${primaryColor === 'blue' ? 'indigo' : 'red'}-700 py-20`}>
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex items-center mb-6">
              <Link 
                to={`/experience/${experienceId}`}
                className="flex items-center text-white/80 hover:text-white transition-colors duration-200 mr-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to experience
              </Link>
            </div>
            
            <div className="text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="text-white font-medium text-sm">
                  {isMediation ? 'Scientific Mediation' : 'Finance & Insurance'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="py-20">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Project Overview */}
                <div className={`bg-gradient-to-br ${bgGradient} p-8 rounded-2xl border border-gray-200 dark:border-gray-700`}>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                    Project Overview
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <Calendar className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {project.duration || '3-6 months'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <User className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Tutor</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {project.tutor || 'Company Supervisor'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Approach */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                    Technical Approach
                  </h2>
                  <div className="space-y-4">
                    {project.technicalApproach?.map((approach, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">{approach}</p>
                      </div>
                    )) || (
                      <p className="text-gray-600 dark:text-gray-400 italic">
                        Technical details are confidential due to company policies.
                      </p>
                    )}
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                    Key Deliverables
                  </h2>
                  <div className="space-y-4">
                    {project.deliverables?.map((deliverable, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-300">{deliverable}</p>
                      </div>
                    )) || (
                      <p className="text-gray-600 dark:text-gray-400 italic">
                        Specific deliverables are confidential due to company policies.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Company Info */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Company</p>
                      <p className="font-medium text-gray-900 dark:text-white">{experience.entreprise}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Position</p>
                      <p className="font-medium text-gray-900 dark:text-white">{experience.poste}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Project Type</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {isMediation ? 'Scientific Outreach' : 'Financial Modeling'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Used */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills Applied</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills?.slice(0, 6).map((skill, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 text-white rounded-full text-xs font-medium ${
                          isMediation 
                            ? 'bg-blue-600' 
                            : 'bg-red-600'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                {experience.technologies && (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies?.slice(0, 6).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
