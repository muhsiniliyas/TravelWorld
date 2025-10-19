// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Hero/HeroSection';
import TourCard from '../components/Tours/TourCard';
import { 
  ArrowRight, 
  Globe,
  Camera
} from 'lucide-react';

const Home = () => {
  // Featured Tours Data (matching TourCard props)
  const featuredTours = [
    {
      id: 1,
      title: 'Swiss Alps',
      location: 'Switzerland',
      rating: 4.9,
      price: 115000,
      duration: '7 Days',
      groupSize: '2-12 People',
      description: 'Experience breathtaking mountain views and pristine alpine landscapes.',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
      toursAvailable: 24
    },
    {
      id: 2,
      title: 'Maldives Paradise',
      location: 'Maldives',
      rating: 5.0,
      price: 220000,
      duration: '5 Days',
      groupSize: '2-8 People',
      description: 'Discover crystal-clear waters and overwater villas in this tropical paradise.',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
      toursAvailable: 18
    },
    {
      id: 3,
      title: 'Rome Historic',
      location: 'Italy',
      rating: 4.8,
      price: 150000,
      duration: '4 Days',
      groupSize: '4-15 People',
      description: 'Walk through ancient history and experience timeless charm.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
      toursAvailable: 32
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Tours Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              <span>Popular Destinations</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Featured Tours
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our handpicked collection of breathtaking destinations around the world
            </p>
          </div>

          {/* Tour Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* View All Tours Button */}
          <div className="text-center mt-12">
            <Link
              to="/tours"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 hover:from-teal-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Travelers' },
              { number: '100+', label: 'Destinations' },
              { number: '500+', label: 'Tour Packages' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
