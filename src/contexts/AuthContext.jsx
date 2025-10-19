// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signUp = async (userData) => {
    try {
      // Simulate API call
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        createdAt: new Date().toISOString()
      };
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signIn = async (email, password) => {
    try {
      // Simulate API call
      const user = {
        id: Date.now(),
        email: email,
        name: email.split('@')[0],
        lastLogin: new Date().toISOString()
      };
      
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
