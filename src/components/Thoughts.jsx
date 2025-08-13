import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getFeaturedThoughts } from '../data/thoughtsData';

const Thoughts = () => {
  // Articles d'aperçu pour la page d'accueil
  const featuredArticles = getFeaturedThoughts();

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20" id="thoughts">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mes Réflexions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partages personnels sur la finance quantitative, l'éducation scientifique, 
            et les innovations technologiques qui façonnent notre avenir.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl hover:shadow-2xl 
                transform transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Article Image */}
              <div className="relative mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="rounded-xl w-full h-48 object-cover shadow-lg"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold shadow-lg">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{article.date}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.readTime}</span>
              </div>

              {/* Read More Button */}
              <Link 
                to={`/thoughts/${article.id}`}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Lire l'article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/thoughts"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Découvrir tous mes articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
