// src/components/Tours/TourCardCompact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const TourCardCompact = ({ tour }) => {
  return (
    <Link
      to={`/tour/${tour.id}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
    >
      {/* Image with Rating Badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Rating */}
        <div className="absolute top-3 left-3 bg-white dark:bg-gray-800 rounded-full px-2.5 py-1 flex items-center space-x-1 shadow-lg">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
          <span className="text-sm font-bold text-gray-900 dark:text-white">{tour.rating}</span>
        </div>

        {/* Price Badge - Changed $ to ₹ */}
        <div className="absolute bottom-3 right-3 bg-teal-500 text-white text-sm font-bold px-3 py-1.5 rounded-full">
          ₹{tour.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 text-sm mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{tour.location}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {tour.title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">{tour.duration}</span>
          <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCardCompact;
