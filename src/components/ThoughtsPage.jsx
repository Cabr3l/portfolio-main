import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, ExternalLink } from 'lucide-react';
import { thoughtsData } from '../data/thoughtsData';

const ThoughtsPage = () => {
  // Données des articles depuis le fichier centralisé
  const articles = thoughtsData;

  const categories = ["Tous", "Finance & Technologie", "Éducation & Science", "Recherche & Optimisation"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center mb-6">
            <Link 
              to="/" 
              className="flex items-center text-blue-100 hover:text-white transition-colors duration-200 mr-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour au Portfolio
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mes Réflexions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            Partages personnels sur la finance quantitative, l'éducation scientifique, 
            et les innovations technologiques qui façonnent notre avenir.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {articles.filter(article => article.featured).map(article => (
        <div key={article.id} className="container mx-auto px-8 md:px-16 lg:px-24 py-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Article en Vedette
                  </span>
                  <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-6">{article.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-6">{article.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/thoughts/${article.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Lire l'article complet
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Articles Grid */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Tous mes articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.filter(article => !article.featured).map(article => (
            <article 
              key={article.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/thoughts/${article.id}`}
                  className="block w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center"
                >
                  Lire la suite
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Restez connecté à mes réflexions
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Recevez mes derniers articles et réflexions directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtsPage;
