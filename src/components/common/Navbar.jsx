// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, LogIn, LogOut, UserCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut, isAuthenticated } = useAuth();

  // Navigation links - DESTINATIONS REMOVED
  const navLinks = [
    { id: 'home', title: 'Home', path: '/' },
    { id: 'about', title: 'About', path: '/about' },
    { id: 'tours', title: 'Tours', path: '/tours' },
    { id: 'services', title: 'Services', path: '/services' },
    { id: 'contact', title: 'Contact', path: '/contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActiveLink = (path) => location.pathname === path;

  const handleSignOut = () => {
    signOut();
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-sm'
      } border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Enhanced with animation */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              {/* Animated ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Main logo circle */}
              <div className="relative w-full h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </div>
            
            <span className="text-lg sm:text-2xl font-bold">
              <span className="text-gray-800 dark:text-white transition-colors">Travel</span>
              <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                World
              </span>
            </span>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`relative px-4 py-2 text-sm xl:text-base font-medium rounded-lg transition-all duration-300 group ${
                  isActiveLink(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.title}
                
                {/* Active indicator */}
                {isActiveLink(link.path) && (
                  <>
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full"></span>
                    <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg -z-10"></span>
                  </>
                )}
                
                {/* Hover effect */}
                {!isActiveLink(link.path) && (
                  <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Auth & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Desktop Auth Section */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                {/* User Profile */}
                <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                    <UserCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[80px] lg:max-w-none truncate">
                    {user?.name || user?.email?.split('@')[0]}
                  </span>
                </div>
                
                {/* Sign Out Button */}
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1.5 px-3 lg:px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 border border-transparent hover:border-red-200 dark:hover:border-red-800"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-xs lg:text-sm font-medium hidden lg:inline">Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                {/* Sign In Button */}
                <Link
                  to="/signin"
                  className="flex items-center space-x-1.5 px-3 lg:px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="text-xs lg:text-sm font-medium">Sign In</span>
                </Link>
                
                {/* Sign Up Button - Gradient */}
                <Link
                  to="/signup"
                  className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 hover:from-teal-600 hover:via-blue-600 hover:to-purple-700 text-white font-semibold px-4 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs lg:text-sm group"
                >
                  <span className="relative z-10">Sign Up</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex-shrink-0 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[calc(100vh-4rem)] opacity-100 visible pb-6' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-y-auto`}
        >
          <div className="space-y-2 pt-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  isActiveLink(link.path)
                    ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 border-l-4 border-blue-600 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.title}</span>
                  {isActiveLink(link.path) && (
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </Link>
            ))}

            {/* Mobile Auth Section - Enhanced */}
            <div className="pt-4 border-t-2 border-gray-200 dark:border-gray-700 mt-4">
              {isAuthenticated ? (
                <div className="space-y-3">
                  {/* User Card */}
                  <div className="flex items-center space-x-3 px-4 py-4 bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl border-2 border-blue-200 dark:border-gray-600 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <UserCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Logged in as</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {user?.name || user?.email?.split('@')[0]}
                      </p>
                    </div>
                  </div>
                  
                  {/* Sign Out Button */}
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-300 border-2 border-red-200 dark:border-red-800 font-semibold hover:scale-[1.02] transform"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Sign In Button */}
                  <Link
                    to="/signin"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 font-semibold border-2 border-gray-300 dark:border-gray-600 hover:scale-[1.02] transform"
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Sign In</span>
                  </Link>
                  
                  {/* Sign Up Button - Gradient */}
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 hover:from-teal-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    <Plane className="w-5 h-5 transform rotate-45" />
                    <span>Sign Up Now</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
