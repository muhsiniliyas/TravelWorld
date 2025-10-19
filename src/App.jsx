// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Booking from './pages/Booking';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/tour/:id" element={<TourDetail />} />
                <Route path="/booking/:tourId" element={<Booking />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
