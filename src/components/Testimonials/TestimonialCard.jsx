// src/components/Testimonials/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {testimonial.rating}/5
        </span>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </blockquote>

      {/* Customer Info */}
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-100 dark:ring-blue-900 group-hover:ring-blue-200 dark:group-hover:ring-blue-800 transition-all duration-300">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {testimonial.destination}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            {testimonial.date}
          </p>
        </div>

        {/* Verified Badge */}
        {testimonial.verified && (
          <div className="ml-2">
            <div className="flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full">
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
    </div>
  );
};

export default TestimonialCard;
