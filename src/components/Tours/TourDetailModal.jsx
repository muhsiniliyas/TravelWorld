// src/components/Tours/TourDetailModal.jsx
import React from 'react';
import { X, Star, Calendar, Users, MapPin, Clock, CheckCircle } from 'lucide-react';

const TourDetailModal = ({ tour, isOpen, onClose, onBook }) => {
  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" 
          onClick={onClose}
        ></div>

        {/* Modal content */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
          {/* Header */}
          <div className="relative">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Rating overlay */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold text-white">{tour.rating}</span>
              <span className="text-xs text-gray-300">({tour.reviews} reviews)</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {tour.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {tour.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:w-80">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sticky top-8">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Starting from</p>
                    <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                      ₹{tour.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Tour Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {tour.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        Max Guests
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {tour.maxGuests}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onBook(tour.id)}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Book This Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailModal;
