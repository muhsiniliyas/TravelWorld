// src/pages/Destinations.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Search, MapPin, Star, ArrowRight, Calendar, Globe, TrendingUp, Filter } from 'lucide-react';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Destinations', icon: '' },
    { id: 'mountains', name: 'Mountains', icon: '' },
    { id: 'islands', name: 'Islands', icon: '' },
    { id: 'cities', name: 'Cities', icon: '' },
    { id: 'beaches', name: 'Beaches', icon: '' },
    { id: 'cultural', name: 'Cultural', icon: '' }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Swiss Alps',
      location: 'Switzerland',
      category: 'mountains',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
      rating: 4.9,
      price: 1299,
      tours: 24,
      featured: true,
      badge: 'Popular',
      description: 'Experience breathtaking mountain views and pristine alpine landscapes in the heart of Switzerland.'
    },
    {
      id: 2,
      name: 'Maldives Paradise',
      location: 'Maldives',
      category: 'islands',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
      rating: 5.0,
      price: 2499,
      tours: 18,
      featured: true,
      badge: 'Luxury',
      description: 'Discover crystal-clear waters and overwater villas in this tropical paradise.'
    },
    {
      id: 3,
      name: 'Rome Historic',
      location: 'Italy',
      category: 'cities',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
      rating: 4.8,
      price: 899,
      tours: 32,
      featured: false,
      badge: 'Best Value',
      description: 'Walk through ancient history and experience the eternal city\'s timeless charm.'
    },
    {
      id: 4,
      name: 'Bali Paradise',
      location: 'Indonesia',
      category: 'beaches',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
      rating: 4.7,
      price: 1199,
      tours: 28,
      featured: false,
      badge: 'Trending',
      description: 'Experience the perfect blend of culture, nature, and relaxation.'
    },
    {
      id: 5,
      name: 'Santorini Dreams',
      location: 'Greece',
      category: 'islands',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
      rating: 4.9,
      price: 1699,
      tours: 22,
      featured: true,
      badge: 'Romantic',
      description: 'Iconic white buildings and stunning Mediterranean sunsets await.'
    },
    {
      id: 6,
      name: 'Tokyo Modern',
      location: 'Japan',
      category: 'cities',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
      rating: 4.8,
      price: 2199,
      tours: 35,
      featured: false,
      badge: 'Modern',
      description: 'Immerse yourself in the fascinating blend of traditional and modern culture.'
    },
    {
      id: 7,
      name: 'Dubai Luxury',
      location: 'UAE',
      category: 'cities',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
      rating: 4.9,
      price: 1899,
      tours: 27,
      featured: true,
      badge: 'Luxury',
      description: 'Experience world-class luxury and futuristic architecture in the desert.'
    },
    {
      id: 8,
      name: 'Machu Picchu',
      location: 'Peru',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop',
      rating: 4.9,
      price: 1599,
      tours: 19,
      featured: true,
      badge: 'Historical',
      description: 'Explore the ancient Incan citadel high in the Andes Mountains.'
    },
    {
      id: 9,
      name: 'Bora Bora',
      location: 'French Polynesia',
      category: 'islands',
      image: 'https://images.unsplash.com/photo-1589197331516-6c0df3a0b8f8?w=800&h=600&fit=crop',
      rating: 5.0,
      price: 3299,
      tours: 15,
      featured: true,
      badge: 'Paradise',
      description: 'The ultimate luxury island escape with turquoise lagoons.'
    }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge) => {
    const colors = {
      'Popular': 'from-orange-500 to-red-500',
      'Luxury': 'from-purple-500 to-pink-500',
      'Best Value': 'from-green-500 to-teal-500',
      'Trending': 'from-blue-500 to-cyan-500',
      'Romantic': 'from-pink-500 to-rose-500',
      'Modern': 'from-indigo-500 to-purple-500',
      'Historical': 'from-amber-500 to-orange-500',
      'Paradise': 'from-teal-500 to-blue-500'
    };
    return colors[badge] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Enhanced Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-teal-100 dark:bg-teal-900/30 rounded-full px-4 py-2 mb-6">
              <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">Explore the World</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                Popular Destinations
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our handpicked collection of breathtaking destinations around the world
            </p>

            {/* Stats Bar */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {destinations.length}+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  200+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Tour Packages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  50K+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy Travelers</div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations, countries, cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 shadow-lg text-sm sm:text-base"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {filteredDestinations.length} destinations found
              </span>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg shadow-sm"
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </button>
            </div>

            {/* Category Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-2 sm:gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowFilters(false);
                    }}
                    className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base flex items-center justify-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDestinations.length > 0 ? (
            <>
              {/* Results Count */}
              <div className="mb-6 sm:mb-8 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCategory === 'all' ? 'All Destinations' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {filteredDestinations.length} results
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredDestinations.map((destination, index) => (
                  <div 
                    key={destination.id} 
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Badge */}
                      <div className={`absolute top-4 right-4 bg-gradient-to-r ${getBadgeColor(destination.badge)} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                        {destination.badge}
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-gray-900">{destination.rating}</span>
                      </div>

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      {/* Destination Info */}
                      <div className="mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                          {destination.name}
                        </h3>
                        <p className="flex items-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{destination.location}</span>
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                          {destination.description}
                        </p>
                      </div>

                      {/* Pricing and Tours Info */}
                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Starting from</p>
                          <p className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400">
                            ${destination.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center justify-end">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {destination.tours} tours
                          </p>
                          <div className="flex items-center text-xs text-gray-600 dark:text-gray-300 mt-1">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>Year-round</span>
                          </div>
                        </div>
                      </div>

                      {/* View Details Button - UPDATED TO LINK */}
                      <Link
                        to={`/tour/${destination.id}`}
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn text-sm sm:text-base shadow-lg hover:shadow-xl"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // No Results State
            <div className="text-center py-12 sm:py-16">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No destinations found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-colors duration-300 text-sm sm:text-base font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let our travel experts help you plan the perfect trip to any of these amazing destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Contact Travel Expert
            </Link>
            <Link 
              to="/tours"
              className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
