// src/pages/About.jsx 
import React from 'react';
import { 
  Target, 
  Heart, 
  Globe, 
  Users, 
  Award, 
  TrendingUp,
  MapPin,
  Shield,
  Sparkles,
  CheckCircle,
  Zap,
  Star,
  Compass,
  ThumbsUp
} from 'lucide-react';

const About = () => {
  const stats = [
    { 
      label: 'Happy Travelers', 
      value: '50,000+',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'Satisfied customers'
    },
    { 
      label: 'Destinations', 
      value: '100+',
      icon: MapPin,
      color: 'from-purple-500 to-pink-500',
      description: 'Countries covered'
    },
    { 
      label: 'Years Experience', 
      value: '15+',
      icon: Award,
      color: 'from-orange-500 to-red-500',
      description: 'Industry expertise'
    },
    { 
      label: 'Travel Packages', 
      value: '500+',
      icon: Globe,
      color: 'from-green-500 to-teal-500',
      description: 'Tour options'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passionate Service',
      description: 'We love what we do and it shows in every travel experience we create for our valued customers.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your safety and security are our top priorities in every journey you take with us.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your dreams and satisfaction drive everything we do, every single day.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'We strive for perfection in every detail of your travel experience with meticulous planning.',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Founded TravelWorld', icon: Sparkles, color: 'from-teal-500 to-cyan-500' },
    { year: '2015', event: 'Expanded to 50+ destinations', icon: TrendingUp, color: 'from-blue-500 to-purple-500' },
    { year: '2020', event: 'Achieved 50,000 happy travelers', icon: Users, color: 'from-purple-500 to-pink-500' },
    { year: '2025', event: 'Industry Excellence Award', icon: Award, color: 'from-orange-500 to-red-500' }
  ];

  const features = [
    { icon: Star, text: '4.9/5 Average Rating', color: 'text-yellow-600' },
    { icon: Shield, text: '100% Secure Booking', color: 'text-blue-600' },
    { icon: ThumbsUp, text: '99% Customer Satisfaction', color: 'text-green-600' },
    { icon: Zap, text: '24/7 Support Available', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section - Clean Gradient */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden">
        {/* Simple Gradient Background - NO BLOBS */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/30 shadow-lg">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Our Story</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            About <span className="text-teal-300">TravelWorld</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8">
            We are passionate about creating unforgettable travel experiences that connect people with 
            the beauty, culture, and adventure that our world has to offer.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto px-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-white/20 backdrop-blur-md text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/30">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-teal-200 dark:border-teal-800">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Our Mission</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Inspiring Travel,<br />Creating Memories
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                To inspire and enable people to explore the world through carefully crafted travel experiences 
                that respect local cultures, protect the environment, and create lasting memories.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                We believe that travel has the power to broaden perspectives, create connections, and 
                contribute to a more understanding and peaceful world.
              </p>

              {/* Checkmarks */}
              <div className="space-y-3 sm:space-y-4">
                {['Sustainable Tourism', 'Cultural Respect', 'Quality Service', 'Memorable Experiences'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
                  alt="Beautiful landscape"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-xl">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Since 2010</div>
                      <div className="text-base sm:text-lg font-bold text-gray-900">15+ Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>What We Stand For</span>
            </div>
            
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              The principles that guide every decision we make and every experience we create
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              Our Impact in Numbers
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 px-4">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-200 dark:border-gray-600">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    
                    <div className="text-xs sm:text-sm lg:text-base text-gray-900 dark:text-white font-bold mb-1">
                      {stat.label}
                    </div>
                    
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section - Clean Gradient */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 relative overflow-hidden">
        {/* Simple Dot Pattern - NO BLOBS */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 px-4">
              Key milestones that shaped TravelWorld into what it is today
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="relative group">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {milestone.year}
                    </div>
                    
                    <p className="text-xs sm:text-sm lg:text-base text-white/90 font-medium leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
