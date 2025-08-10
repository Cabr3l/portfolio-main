import React, { useState } from 'react';

const TabNavigation = ({ tabs = [], activeTab, onTabChange, className = "" }) => {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className={`${className}`}>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            const isHovered = hoveredTab === tab.key;
            
            return (
              <button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
                onMouseEnter={() => setHoveredTab(tab.key)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300
                  ${isActive
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
                  }
                  ${isHovered && !isActive ? 'scale-105' : ''}
                `}
              >
                <div className="flex items-center space-x-2">
                  {tab.icon && (
                    <tab.icon className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
                  )}
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${isActive 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }
                    `}>
                      {tab.badge}
                    </span>
                  )}
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full transform scale-x-100 transition-transform duration-300" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;
