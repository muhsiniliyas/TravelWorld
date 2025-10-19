// src/components/common/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg
        bg-gradient-to-r from-blue-500 to-purple-600 text-white
        hover:from-blue-600 hover:to-purple-700 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition-all duration-300 ease-in-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
      `}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
