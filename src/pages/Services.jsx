// src/pages/Services.jsx
import React from 'react';
import { 
  Plane, 
  Hotel, 
  Map, 
  Shield, 
  Headphones, 
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Globe,
  Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Flight Booking',
      description: 'Find and book the best flights at competitive prices with our advanced search engine and real-time availability.',
      icon: Plane,
      gradient: 'from-blue-500 to-cyan-500',
      bgLight: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['24/7 Support', 'Best Price Guarantee', 'Flexible Cancellation', 'Seat Selection'],
      stats: { value: '10K+', label: 'Daily Bookings' }
    },
    {
      id: 2,
      title: 'Hotel Reservations',
      description: 'Book comfortable accommodations worldwide with exclusive deals, instant confirmation, and verified reviews.',
      icon: Hotel,
      gradient: 'from-purple-500 to-pink-500',
      bgLight: 'bg-purple-50 dark:bg-purple-900/20',
      features: ['Verified Reviews', 'Instant Booking', 'Special Offers', 'Free Cancellation'],
      stats: { value: '50K+', label: 'Hotels Listed' }
    },
    {
      id: 3,
      title: 'Tour Packages',
      description: 'Discover curated travel experiences with local guides, authentic cultural immersion, and memorable adventures.',
      icon: Map,
      gradient: 'from-orange-500 to-red-500',
      bgLight: 'bg-orange-50 dark:bg-orange-900/20',
      features: ['Expert Guides', 'Group Discounts', 'Custom Itineraries', 'Local Experiences'],
      stats: { value: '500+', label: 'Tour Options' }
    },
    {
      id: 4,
      title: 'Travel Insurance',
      description: 'Protect your investment with comprehensive travel insurance coverage for medical, cancellation, and emergencies.',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
      bgLight: 'bg-green-50 dark:bg-green-900/20',
      features: ['Medical Coverage', 'Trip Cancellation', 'Emergency Assistance', 'Lost Luggage'],
      stats: { value: '99%', label: 'Claim Success' }
    },
    {
      id: 5,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you throughout your journey with multilingual assistance.',
      icon: Headphones,
      gradient: 'from-teal-500 to-blue-500',
      bgLight: 'bg-teal-50 dark:bg-teal-900/20',
      features: ['Live Chat', 'Phone Support', 'Emergency Hotline', 'Multi-language'],
      stats: { value: '<5min', label: 'Response Time' }
    },
    {
      id: 6,
      title: 'Group Travel',
      description: 'Specialized services for group bookings, corporate travel needs, and special event arrangements.',
      icon: Users,
      gradient: 'from-indigo-500 to-purple-500',
      bgLight: 'bg-indigo-50 dark:bg-indigo-900/20',
      features: ['Group Discounts', 'Custom Packages', 'Dedicated Manager', 'Event Planning'],
      stats: { value: '30%', label: 'Group Savings' }
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Best Travel Service 2024'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: '100% Payment Protection'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: '150+ Countries'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Average 5min reply'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Animated Background */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900 opacity-10">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Premium Travel Services</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
              Comprehensive Travel
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Services for You</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
            Everything you need for a perfect journey - from booking to support, we've got you covered with world-class services.
          </p>

          {/* Stats/Benefits Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who trust us with their adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
