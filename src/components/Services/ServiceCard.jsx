// src/components/Services/ServiceCard.jsx
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 overflow-hidden hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon Header with Gradient */}
      <div className={`${service.bgLight} p-6 sm:p-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white dark:bg-gray-800 opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
            <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Stats Badge */}
        <div className={`${service.bgLight} rounded-xl p-4 mb-6`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{service.stats.label}</p>
              <p className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.stats.value}
              </p>
            </div>
            <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full opacity-20`}></div>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
