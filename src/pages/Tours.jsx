// src/pages/Tours.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TourCard from '../components/Tours/TourCard';
import { Search, Filter, MapPin, DollarSign, X } from 'lucide-react';

const Tours = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Scroll to top when navigating from search
  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Apply search parameters from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const destination = params.get('destination');
    
    if (destination) {
      setSearchTerm(destination);
      // Auto-clear after 3 seconds
      const timer = setTimeout(() => {
        setSearchTerm('');
        setHasSearched(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [location.search]);

  const tours = [
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
      toursAvailable: 24,
      category: 'adventure'
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
      toursAvailable: 18,
      category: 'beach'
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
      toursAvailable: 32,
      category: 'cultural'
    },
    {
      id: 4,
      title: 'Paris Romance',
      location: 'France',
      rating: 4.9,
      price: 145000,
      duration: '6 Days',
      groupSize: '2-10 People',
      description: 'Experience the city of love with iconic landmarks and gourmet cuisine.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      toursAvailable: 28,
      category: 'cultural'
    },
    {
      id: 5,
      title: 'Tokyo Explorer',
      location: 'Japan',
      rating: 4.7,
      price: 168000,
      duration: '8 Days',
      groupSize: '4-12 People',
      description: 'Discover ancient temples, modern technology, and unique culture.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
      toursAvailable: 22,
      category: 'cultural'
    },
    {
      id: 6,
      title: 'Safari Adventure',
      location: 'Kenya',
      rating: 4.9,
      price: 205000,
      duration: '7 Days',
      groupSize: '4-8 People',
      description: 'Witness incredible wildlife in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      toursAvailable: 15,
      category: 'adventure'
    },
    {
      id: 7,
      title: 'Bali Retreat',
      location: 'Indonesia',
      rating: 4.8,
      price: 105000,
      duration: '6 Days',
      groupSize: '2-10 People',
      description: 'Relax in tropical paradise with pristine beaches and temples.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
      toursAvailable: 25,
      category: 'beach'
    },
    {
      id: 8,
      title: 'Iceland Northern Lights',
      location: 'Iceland',
      rating: 5.0,
      price: 160000,
      duration: '5 Days',
      groupSize: '4-12 People',
      description: 'Chase the aurora borealis and explore dramatic landscapes.',
      image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop',
      toursAvailable: 20,
      category: 'adventure'
    },
    {
      id: 9,
      title: 'Dubai Luxury',
      location: 'UAE',
      rating: 4.7,
      price: 185000,
      duration: '5 Days',
      groupSize: '2-8 People',
      description: 'Experience luxury shopping, dining, and modern architecture.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
      toursAvailable: 30,
      category: 'luxury'
    }
    
  ];

  const categories = [
    { id: 'all', name: 'All Tours', icon: MapPin, emoji: '' },
    { id: 'adventure', name: 'Adventure', icon: MapPin, emoji: '' },
    { id: 'beach', name: 'Beach', icon: MapPin, emoji: '' },
    { id: 'cultural', name: 'Cultural', icon: MapPin, emoji: '' },
    { id: 'luxury', name: 'Luxury', icon: DollarSign, emoji: '' }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || tour.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleFilterSelect = (filterId) => {
    setSelectedFilter(filterId);
    setShowFilterModal(false);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setHasSearched(false);
  };

  // Auto-clear search after typing stops for 5 seconds
  useEffect(() => {
    if (searchTerm && !hasSearched) {
      const timer = setTimeout(() => {
        // Uncomment the line below if you want auto-clear while typing
        // setSearchTerm('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [searchTerm, hasSearched]);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Discover Amazing Tours
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Explore handpicked destinations and create unforgettable memories with our curated travel experiences
          </p>

          {/* Search Bar with Advanced Clear Button */}
          <div className="max-w-2xl mx-auto px-2 sm:px-0">
            <div className="relative group">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 transition-colors group-focus-within:text-blue-500" />
              <input
                type="text"
                placeholder="Search destinations, tours..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setHasSearched(false);
                }}
                className="w-full pl-10 sm:pl-12 pr-12 sm:pr-14 py-3 sm:py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-all text-sm sm:text-base shadow-lg"
              />
              
              {/* Advanced Clear Button - Only shows when there's text */}
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-red-500 dark:hover:bg-red-500 hover:scale-110 transition-all duration-200 group/clear animate-fade-in"
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300 group-hover/clear:text-white transition-colors" />
                </button>
              )}

              {/* Search Results Count Badge */}
              {searchTerm && (
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center animate-slide-up">
                  <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-md border border-gray-200 dark:border-gray-600">
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {filteredTours.length} {filteredTours.length === 1 ? 'result' : 'results'} found
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar - Mobile Optimized with Modal */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Desktop Filter Bar */}
          <div className="hidden md:flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center space-x-2 text-sm ${
                  selectedFilter === category.id
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <span>{category.emoji}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Filter Button & Selected Filter */}
          <div className="md:hidden flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {categories.find(c => c.id === selectedFilter)?.name}
              </span>
            </div>
            <button
              onClick={() => setShowFilterModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium text-sm flex items-center space-x-2 shadow-md"
            >
              <Filter className="w-4 h-4" />
              <span>Change Filter</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowFilterModal(false)}
          ></div>

          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl p-6 shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Select Category</h3>
              <button
                onClick={() => setShowFilterModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleFilterSelect(category.id)}
                  className={`w-full px-4 py-4 rounded-xl font-medium transition-all flex items-center justify-between ${
                    selectedFilter === category.id
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.emoji}</span>
                    <span className="text-base">{category.name}</span>
                  </div>
                  {selectedFilter === category.id && (
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tours Grid - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {filteredTours.length} Tours Available
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
              {selectedFilter !== 'all' ? `Showing ${selectedFilter} tours` : 'Showing all tours'}
            </p>
          </div>

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No tours found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search or filters
              </p>
              <button
                onClick={handleClearSearch}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <X className="w-4 h-4" />
                <span>Clear Search & Show All Tours</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tours;
