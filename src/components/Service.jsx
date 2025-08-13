import React from 'react';
import { Code, Database, ChartBar, Globe, Shield, Zap } from 'lucide-react';

const Service = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl mb-6 mx-auto">
        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
        {description}
      </p>
      
      {features && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Service;
