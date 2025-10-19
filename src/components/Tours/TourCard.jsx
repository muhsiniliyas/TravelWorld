// src/components/Tours/TourCard.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Star, Clock, Users, ArrowRight, Heart, Calendar } from 'lucide-react';

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking/${tour.id}`, { state: { tour } });
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      {/* Image Section */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white dark:bg-gray-800 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-lg flex items-center space-x-1">
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
          <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{tour.rating}</span>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300 group/heart">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover/heart:text-red-500 group-hover/heart:fill-current transition-colors" />
        </button>

        {/* Tours Available Badge */}
        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-green-500 text-white text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
          {tour.toursAvailable} tours
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* Location */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium truncate">{tour.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {tour.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Tour Info */}
        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm">{tour.duration}</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-400">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">{tour.groupSize}</span>
          </div>
        </div>

        {/* Price & Buttons */}
        <div className="space-y-3">
          {/* Price - Changed $ to ₹ */}
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">From</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              ₹{tour.price}
              <span className="text-xs sm:text-sm font-normal text-gray-600 dark:text-gray-400">/person</span>
            </p>
          </div>

          {/* Action Buttons - Stacked on Mobile, Side-by-side on Desktop */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {/* Book Now Button - Primary */}
            <button
              onClick={handleBookNow}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group/book text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>

            {/* View Details Button - Secondary */}
            <Link
              to={`/tour/${tour.id}`}
              className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group/btn text-sm sm:text-base"
            >
              <span>Details</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
