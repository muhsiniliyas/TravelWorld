// src/components/common/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex h-8 w-16 items-center justify-center 
          rounded-full border-2 transition-all duration-300 ease-in-out
          ${isDark 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-blue-500 border-blue-400'
          }
          hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2
          ${isDark ? 'focus:ring-gray-500' : 'focus:ring-blue-500'}
        `}
        aria-label="Toggle theme"
      >
        <span
          className={`
            absolute inline-block h-6 w-6 transform rounded-full 
            bg-white shadow-lg transition-transform duration-300 ease-in-out
            ${isDark ? 'translate-x-4' : '-translate-x-4'}
          `}
        >
          <span className="absolute inset-0 flex items-center justify-center">
            {isDark ? (
              <svg className="h-3 w-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="h-3 w-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </span>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
