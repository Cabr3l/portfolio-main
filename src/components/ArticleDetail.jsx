import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Bookmark, Twitter, Linkedin, Facebook } from 'lucide-react';
import { thoughtsData } from '../data/thoughtsData';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Données des articles depuis le fichier centralisé
  const articles = thoughtsData;

  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article non trouvé</h1>
          <button 
            onClick={() => navigate('/thoughts')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Retour aux articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/thoughts" 
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux articles
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <Bookmark className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex items-center mb-8 text-gray-500 dark:text-gray-400">
              <User className="w-4 h-4 mr-2" />
              <span className="mr-6">{article.author}</span>
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-6">{article.date}</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-800 dark:text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Social Sharing */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Partagez cet article
            </h3>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-200">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors duration-200">
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
