// src/components/common/Footer.jsx - WITH LIGHT/DARK THEME SUPPORT
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ChevronRight,
  Heart,
  Globe,
  Clock,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about', icon: <ChevronRight className="w-4 h-4" /> },
      { name: 'Contact', href: '/contact', icon: <ChevronRight className="w-4 h-4" /> }
    ],
    destinations: [
      { name: 'Popular Tours', href: '/destinations', icon: <ChevronRight className="w-4 h-4" /> },
      { name: 'Adventure Trips', href: '/tours', icon: <ChevronRight className="w-4 h-4" /> },
      { name: 'Cultural Tours', href: '/tours', icon: <ChevronRight className="w-4 h-4" /> },
      { name: 'Beach Holidays', href: '/tours', icon: <ChevronRight className="w-4 h-4" /> }
    ]
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      content: '+91',
      href: 'tel:+91'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      content: '',
      href: 'mailto:'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Address',
      content: '123 Travel St, Adventure City',
      href: '#'
    }
  ];

  const badges = [
    { icon: <Shield className="w-5 h-5" />, text: 'Secure Booking' },
    { icon: <Award className="w-5 h-5" />, text: 'Award Winning' },
    { icon: <Globe className="w-5 h-5" />, text: '150+ Countries' },
    { icon: <Clock className="w-5 h-5" />, text: '24/7 Support' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-800 dark:text-white relative overflow-hidden border-t border-gray-300 dark:border-gray-800">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-300 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Mail className="w-4 h-4" />
              <span>Stay Updated</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Get the latest travel deals, destination guides, and exclusive offers directly to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-md"
                />
              </div>
              <button 
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                {subscribed ? (
                  <>
                    <Heart className="w-5 h-5 fill-current" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative border-b border-gray-300 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  {badge.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-center sm:text-left text-gray-700 dark:text-gray-300">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info - Wider Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-7 h-7 text-white transform rotate-45" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Travel<span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">World</span>
              </span>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Discover amazing places around the world with our carefully curated travel experiences. 
              Your adventure begins here, and we'll be with you every step of the way.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-600 transition-all duration-300 shadow-md">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{info.title}</p>
                    <p className="text-sm font-medium">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all duration-300 flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-white">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all duration-300 flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-white">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} TravelWorld. All rights reserved. Made with{' '}
               by TravelWorld Team
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white text-xs sm:text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white text-xs sm:text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white text-xs sm:text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
