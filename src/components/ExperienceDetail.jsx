import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Award, Code, TrendingUp, Target, Zap } from 'lucide-react';

const ExperienceDetail = ({ experience }) => {
  // Déterminer le thème de couleur basé sur l'ID de l'expérience
  const isBlueTheme = experience.id === 1;
  const primaryColor = isBlueTheme ? 'blue' : 'red';
  const primaryGradient = isBlueTheme 
    ? 'from-blue-600 via-blue-700 to-indigo-800' 
    : 'from-red-600 via-red-700 to-pink-800';
  const secondaryGradient = isBlueTheme 
    ? 'from-blue-500 to-blue-600' 
    : 'from-red-500 to-red-600';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Bannière */}
      <div className={`bg-gradient-to-r ${primaryGradient} py-16`}>
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              to="/experiences" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux expériences
            </Link>
          </div>

          {/* Contenu de la bannière */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 border border-white/30">
              <img 
                src={experience.image} 
                alt={experience.entreprise} 
                className="w-14 h-14 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {experience.poste}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
              {experience.entreprise}
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 mr-2" />
                <span>2023 - 2024</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 mr-2" />
                <span>Équipe de 15+ personnes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description de l'entreprise */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Award className={`w-6 h-6 mr-3 text-${primaryColor}-500`} />
                  À propos de l'entreprise
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {experience.companyDescription}
                </p>
              </div>

              {/* Description de l'expérience */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Code className={`w-6 h-6 mr-3 text-${primaryColor}-500`} />
                  Mon expérience
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {experience.description}
                </p>
                
                {/* Responsabilités principales */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Responsabilités principales :</h4>
                  <ul className="space-y-3">
                    {experience.responsibilities?.map((resp, index) => (
                      <li key={index} className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div className={`w-2 h-2 bg-${primaryColor}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projets réalisés */}
              {experience.projects && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Target className={`w-6 h-6 mr-3 text-${primaryColor}-500`} />
                    Projets réalisés
                  </h3>
                  <div className="space-y-4">
                    {experience.projects.map((project, index) => (
                      <div key={index} className={`border-l-4 border-${primaryColor}-500 pl-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-r-lg`}>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Compétences acquises */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap className={`w-5 h-5 mr-2 text-${primaryColor}-500`} />
                  Compétences acquises
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.skills?.map((skill, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-2 bg-gradient-to-r ${secondaryGradient} text-white rounded-full text-sm font-medium hover:scale-105 transform transition-all duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies utilisées */}
              {experience.technologies && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Code className={`w-5 h-5 mr-2 text-${primaryColor}-500`} />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Réalisations */}
              {experience.achievements && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <TrendingUp className={`w-5 h-5 mr-2 text-${primaryColor}-500`} />
                    Réalisations
                  </h3>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div className={`w-2 h-2 bg-${primaryColor}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                      </div>
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
};

export default ExperienceDetail;
