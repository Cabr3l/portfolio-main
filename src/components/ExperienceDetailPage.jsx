import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Code, FileText, BarChart3, ExternalLink, Github, Calendar, MapPin, Building, Target, Users } from 'lucide-react';
import { experiencesData } from '../data/experiencesData';
import Navbar from './Navbar';

const ExperienceDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const experience = experiencesData.find(exp => exp.id === parseInt(id));

  if (!experience) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The experience you're looking for doesn't exist.</p>
          <Link to="/experiences" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Back to Experiences
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'achievements', label: 'Achievements', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      {/* Header */}
      <div className="bg-blue-600 py-20 mt-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <Link 
            to="/experiences" 
            className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Experiences
          </Link>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="text-white font-medium text-sm">{experience.poste}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{experience.poste}</h1>
              <p className="text-xl text-blue-100 mb-6 max-w-3xl">{experience.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-white/80">
                  <Building className="w-5 h-5 mr-2" />
                  <span>{experience.entreprise}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{experience.periode}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{experience.lieu}</span>
                </div>
              </div>

              {experience.skills && (
                <div className="flex flex-wrap gap-2">
                  {experience.skills.slice(0, 6).map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Role Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{experience.description}</p>
                </div>

                {experience.skills && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Key Skills & Competencies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experience.skills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {experience.technologies && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-4">Company Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Company</h4>
                      <p className="text-gray-600 dark:text-gray-400">{experience.entreprise}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">{experience.lieu}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Duration</h4>
                      <p className="text-gray-600 dark:text-gray-400">{experience.periode}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Position</h4>
                      <p className="text-gray-600 dark:text-gray-400">{experience.poste}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Projects Completed</h3>
                {experience.projects && experience.projects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experience.projects.map((project, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Project {index + 1}</span>
                          <Link 
                            to={`/project/${project.id}`}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">No specific projects documented for this experience.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Achievements & Impact</h3>
                {experience.achievements && experience.achievements.length > 0 ? (
                  <div className="space-y-4">
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">No specific achievements documented for this experience.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage;
