import React from 'react';

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 dark:border-gray-700 rounded-full animate-pulse`}></div>
        
        {/* Spinning ring */}
        <div className={`${sizeClasses[size]} border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full absolute top-0 left-0 animate-spin`}></div>
        
        {/* Inner dot */}
        <div className={`${sizeClasses[size]} bg-blue-600 dark:bg-blue-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow`} style={{ width: '25%', height: '25%' }}></div>
      </div>
      
      {text && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium animate-pulse">
          {text}
          <span className="loading-dots"></span>
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
