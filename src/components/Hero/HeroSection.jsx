// src/components/Hero/HeroSection.jsx 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Search, 
  Users, 
  Sparkles, 
  TrendingUp, 
  Award, 
  Globe
} from 'lucide-react';

const typingDemoText = 'Enter destination...';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const backgroundImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    if (typingIndex < typingDemoText.length) {
      const timeout = setTimeout(() => {
        setTypingIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  useEffect(() => {
    const caretBlink = setInterval(() => {
      setShowCaret((v) => !v);
    }, 530);
    return () => clearInterval(caretBlink);
  }, []);

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (searchData.destination) params.append('destination', searchData.destination);
    if (searchData.checkIn) params.append('checkIn', searchData.checkIn);
    if (searchData.checkOut) params.append('checkOut', searchData.checkOut);
    if (searchData.guests) params.append('guests', searchData.guests);

    navigate(`/tours?${params.toString()}`, { 
      state: { scrollToTop: true, searchData: searchData } 
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('${image}')`,
              opacity: currentImageIndex === index ? 1 : 0,
              transform: currentImageIndex === index ? 'scale(1)' : 'scale(1.05)',
              zIndex: currentImageIndex === index ? 1 : 0
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8">
        {/* Stats Bar - Mobile Responsive */}
        <div className="mb-6 sm:mb-8 md:mb-10 flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 animate-fade-in">
          <div className="group bg-white/90 rounded-xl xs:rounded-2xl px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 hover:bg-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
            <div className="flex items-center space-x-1.5 xs:space-x-2">
              <Globe className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 text-cyan-600 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <div className="text-left">
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600">Destinations</p>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900">500+</p>
              </div>
            </div>
          </div>
          
          <div className="group bg-white/90 rounded-xl xs:rounded-2xl px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 hover:bg-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
            <div className="flex items-center space-x-1.5 xs:space-x-2">
              <Users className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 text-green-600 group-hover:scale-110 transition-transform flex-shrink-0" />
              <div className="text-left">
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600">Travelers</p>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900">10K+</p>
              </div>
            </div>
          </div>
          
          <div className="group bg-white/90 rounded-xl xs:rounded-2xl px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 hover:bg-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
            <div className="flex items-center space-x-1.5 xs:space-x-2">
              <Award className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 text-yellow-600 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <div className="text-left">
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600">Rating</p>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900">4.9★</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text - Mobile Responsive */}
        <div className="mb-6 sm:mb-10 md:mb-14 animate-fade-in px-2">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl">
            Explore the World with
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mt-1 sm:mt-2 drop-shadow-lg">
              TravelWorld
            </span>
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Discover amazing places, create unforgettable memories, and embark on your next adventure
          </p>
        </div>

        {/* Enhanced Search Form - Mobile Optimized */}
        <div className="max-w-5xl mx-auto animate-slide-up">
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8">
            <form onSubmit={handleSearch} className="space-y-3 sm:space-y-4 md:space-y-5">
              {/* Search Inputs Row */}
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Destination Input */}
                <div className="relative group xs:col-span-2 lg:col-span-1">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                    <span>Where to?</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none z-10 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="text"
                      value={searchData.destination}
                      onChange={(e) => handleInputChange('destination', e.target.value)}
                      placeholder=""
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 font-medium text-xs sm:text-sm md:text-base hover:border-blue-300 hover:shadow-md relative z-20"
                      autoComplete="off"
                      style={{ caretColor: '#3b82f6' }}
                    />
                    {/* Typing Placeholder */}
                    {searchData.destination === '' && (
                      <div className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 pointer-events-none select-none flex items-center z-0">
                        <span className="text-gray-400 text-xs sm:text-sm md:text-base font-normal">
                          {typingDemoText.slice(0, typingIndex)}
                        </span>
                        {showCaret && (
                          <span className="inline-block w-0.5 h-3.5 sm:h-4 md:h-5 bg-gradient-to-b from-blue-500 to-cyan-500 ml-0.5 animate-pulse"></span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Check-in Date */}
                <div className="relative group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                    <span>Check in</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none z-10 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="date"
                      value={searchData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      min={today}
                      className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2.5 sm:py-3 md:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-white text-gray-900 font-medium text-xs sm:text-sm md:text-base hover:border-green-300 hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Check-out Date */}
                <div className="relative group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
                    <span>Check out</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none z-10 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      type="date"
                      value={searchData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      min={searchData.checkIn || today}
                      className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2.5 sm:py-3 md:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white text-gray-900 font-medium text-xs sm:text-sm md:text-base hover:border-purple-300 hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="relative group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2 flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                    <span>Guests</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none z-10 group-focus-within:text-orange-500 transition-colors" />
                    <select
                      value={searchData.guests}
                      onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                      className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2.5 sm:py-3 md:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white appearance-none text-gray-900 font-medium cursor-pointer text-xs sm:text-sm md:text-base hover:border-orange-300 hover:shadow-md"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} Guest{num !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Live Preview */}
              {searchData.destination && (
                <div className="text-left animate-slide-up">
                  <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 animate-bounce flex-shrink-0" />
                    <span className="text-blue-700 font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base">
                      Destination: <span className="font-bold text-blue-900">{searchData.destination}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Search Summary Pills */}
              {(searchData.checkIn || searchData.checkOut || searchData.guests > 1) && (
                <div className="text-left flex flex-wrap gap-1.5 sm:gap-2">
                  {searchData.checkIn && (
                    <div className="inline-flex items-center space-x-1 sm:space-x-1.5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-full px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 shadow-md hover:shadow-lg hover:scale-105 transition-all">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                      <span className="text-green-700 text-[10px] xs:text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {new Date(searchData.checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  )}
                  {searchData.checkOut && (
                    <div className="inline-flex items-center space-x-1 sm:space-x-1.5 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-full px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 shadow-md hover:shadow-lg hover:scale-105 transition-all">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-600 flex-shrink-0" />
                      <span className="text-purple-700 text-[10px] xs:text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {new Date(searchData.checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  )}
                  {searchData.guests > 1 && (
                    <div className="inline-flex items-center space-x-1 sm:space-x-1.5 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-full px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 shadow-md hover:shadow-lg hover:scale-105 transition-all">
                      <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-orange-600 flex-shrink-0" />
                      <span className="text-orange-700 text-[10px] xs:text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {searchData.guests} Guests
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Search Button */}
              <div className="flex justify-center pt-2 sm:pt-3 md:pt-4">
                <button
                  type="submit"
                  className="group relative w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 py-3 xs:py-3.5 sm:py-4 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 sm:hover:scale-110 hover:shadow-2xl shadow-xl shadow-blue-500/50 flex items-center justify-center space-x-2 sm:space-x-3 text-sm xs:text-base sm:text-lg overflow-hidden"
                >
                  <Search className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform flex-shrink-0" />
                  <span>Search Tours</span>
                  <TrendingUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 sm:h-2 md:h-2.5 rounded-full transition-all duration-500 transform hover:scale-125 ${
              index === currentImageIndex 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-6 sm:w-8 md:w-10 shadow-lg shadow-blue-500/50' 
                : 'bg-white/60 hover:bg-white/90 w-1.5 sm:w-2 md:w-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
