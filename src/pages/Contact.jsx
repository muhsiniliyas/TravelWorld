// src/pages/Contact.jsx
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus({ submitted: false, loading: false });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Visit Us',
      details: ['123 Travel Street', 'Adventure City, AC 12345', 'TamilNadu'],
      color: 'from-teal-500 to-blue-600'
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Call Us',
      details: ['+91', '+91', 'Mon-Fri 9AM-6PM EST'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email Us',
      details: ['', '', ''],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed'],
      color: 'from-green-500 to-teal-600'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, name: 'Facebook', url: '#' },
    { icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />, name: 'Youtube', url: '#' },
    { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, name: 'Instagram', url: '#' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Animated Background - Mobile Optimized */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900">
          <div className="absolute inset-0 opacity-20 sm:opacity-30">
            <div className="absolute top-0 -left-4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-medium text-sm sm:text-base">We're Here to Help</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Get In Touch
            <span className="block text-teal-200 mt-2">Start Your Journey Today</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Have questions about your next adventure? Our travel experts are ready to help you plan the perfect trip. Let's make your travel dreams come true!
          </p>
        </div>

        {/* Decorative Wave - Responsive */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 md:h-20 lg:h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0L60 8.33333C120 16.6667 240 33.3333 360 41.6667C480 50 600 50 720 41.6667C840 33.3333 960 16.6667 1080 16.6667C1200 16.6667 1320 33.3333 1380 41.6667L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="currentColor" className="text-gray-50 dark:text-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Contact Form and Info Section - Mobile Responsive */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form - Full width on mobile, 3 columns on desktop */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100 dark:border-gray-700">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {formStatus.submitted ? (
                  <div className="py-12 sm:py-16 text-center animate-scale-in">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                      Thank you for contacting us. We'll get back to you soon!
                    </p>
                    <button
                      onClick={() => setFormStatus({ submitted: false, loading: false })}
                      className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 text-sm sm:text-base"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                          placeholder="your@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Subject Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="group">
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                          placeholder="+91"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="support">Customer Support</option>
                          <option value="feedback">Feedback</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="group">
                      <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        maxLength={500}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your travel plans or how we can help you..."
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none text-sm sm:text-base"
                      ></textarea>
                      <p className="mt-1.5 sm:mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {formData.message.length}/500 characters
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus.loading}
                      className="w-full bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 hover:from-teal-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                    >
                      {formStatus.loading ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information Sidebar - Full width on mobile, 2 columns on desktop */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Contact Info Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-0.5 sm:space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 break-words">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900 rounded-xl shadow-xl p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Follow Us</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-xs sm:text-sm">
                  Stay connected and get the latest travel updates, deals, and inspiration
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-2 sm:space-x-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2.5 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {social.icon}
                      <span className="font-medium text-xs sm:text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-green-900 dark:text-green-100 mb-1.5 sm:mb-2">
                  Quick Response Time
                </h4>
                <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                  We typically respond within 24 hours on business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Mobile Responsive */}
      <section className="py-8 sm:py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Visit Our Office
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Drop by our office for a face-to-face consultation
            </p>
          </div>

          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
            <div className="text-center px-4">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 dark:text-gray-500 mx-auto mb-3 sm:mb-4" />
              <p className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">
                Interactive Map
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
                Coming Soon - Google Maps Integration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
