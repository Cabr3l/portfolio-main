import React, { useState, useEffect, useRef } from 'react';

const AnimatedStats = ({ stats = [], className = "" }) => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const timer = setTimeout(() => {
          animateValue(stat.key, stat.value, stat.suffix || '');
        }, index * 200);

        return () => clearTimeout(timer);
      });
    }
  }, [isVisible, stats]);

  const animateValue = (key, targetValue, suffix) => {
    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;

    const updateValue = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (targetValue - startValue) * easeOutQuart;

      setAnimatedValues(prev => ({
        ...prev,
        [key]: Math.floor(currentValue)
      }));

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`} ref={statsRef}>
      {stats.map((stat, index) => (
        <div
          key={stat.key}
          className="text-center group hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className={`${stat.iconBg || 'bg-blue-600'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {stat.icon && (
              <stat.icon className={`w-8 h-8 ${stat.iconColor || 'text-white'}`} />
            )}
          </div>
          
          <div className="mb-2">
            <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {animatedValues[stat.key] || 0}
            </span>
            {stat.suffix && (
              <span className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400">
                {stat.suffix}
              </span>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {stat.label}
          </p>
          
          {stat.description && (
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              {stat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedStats;
