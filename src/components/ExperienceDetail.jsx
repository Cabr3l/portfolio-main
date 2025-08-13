import React from 'react';
import { Calendar, MapPin, Building, Users, Target, TrendingUp } from 'lucide-react';

const ExperienceDetail = ({ experience }) => {
  if (!experience) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {experience.poste}
          </h3>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {experience.entreprise}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {experience.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-blue-500 mr-3" />
          <span className="text-gray-700 dark:text-gray-300">{experience.periode}</span>
        </div>
        
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-blue-500 mr-3" />
          <span className="text-gray-700 dark:text-gray-300">{experience.lieu}</span>
        </div>
        
        <div className="flex items-center">
          <Building className="w-5 h-5 text-blue-500 mr-3" />
          <span className="text-gray-700 dark:text-gray-300">{experience.entreprise}</span>
        </div>
        
        <div className="flex items-center">
          <Users className="w-5 h-5 text-blue-500 mr-3" />
          <span className="text-gray-700 dark:text-gray-300">Team Collaboration</span>
        </div>
      </div>

      {experience.skills && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-500" />
            Key Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {experience.technologies && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {experience.achievements && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceDetail;
