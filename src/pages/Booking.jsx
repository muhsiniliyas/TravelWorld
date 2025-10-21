// src/pages/Booking.jsx - COMPLETE WITH SIDEBAR AND RUPEE SYMBOL
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  ArrowLeft, 
  Info,
  AlertCircle,
  Star,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Globe,
  DollarSign,
  Tag,
  Award,
  Heart,
  Share2,
  Download,
  Printer,
  MessageCircle,
  Lock
} from 'lucide-react';

const Booking = () => {
  const navigate = useNavigate();
  const { tourId } = useParams();
  const location = useLocation();
  const tourData = location.state?.tour;

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    roomType: 'standard',
    specialRequests: '',
    emergencyContact: '',
    emergencyPhone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    agreeToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [errors, setErrors] = useState({});

  // Typing animation for placeholders
  const [placeholders, setPlaceholders] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passportNumber: '',
    emergencyContact: '',
    emergencyPhone: '',
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: ''
  });

  const placeholderTexts = {
    fullName: 'Enter your full name...',
    email: 'your@email.com',
    phone: '+91',
    nationality: 'Your nationality',
    passportNumber: 'A1234567',
    emergencyContact: 'Emergency contact name',
    emergencyPhone: 'Emergency phone',
    cardNumber: '1234 5678 9012 3456',
    cardholderName: 'Name on card',
    expiryDate: 'MM/YY',
    cvv: '123'
  };

  // Typing animation effect
  useEffect(() => {
    const animateTyping = (field, text, delay = 0) => {
      let index = 0;
      setTimeout(() => {
        const interval = setInterval(() => {
          if (index < text.length) {
            setPlaceholders(prev => ({
              ...prev,
              [field]: text.slice(0, index + 1)
            }));
            index++;
          } else {
            clearInterval(interval);
          }
        }, 50);
      }, delay);
    };

    if (currentStep === 1) {
      animateTyping('fullName', placeholderTexts.fullName, 0);
      animateTyping('email', placeholderTexts.email, 200);
      animateTyping('phone', placeholderTexts.phone, 400);
      animateTyping('nationality', placeholderTexts.nationality, 600);
      animateTyping('passportNumber', placeholderTexts.passportNumber, 800);
    }
    
    if (currentStep === 2) {
      animateTyping('emergencyContact', placeholderTexts.emergencyContact, 0);
      animateTyping('emergencyPhone', placeholderTexts.emergencyPhone, 200);
    }
    
    if (currentStep === 3) {
      animateTyping('cardNumber', placeholderTexts.cardNumber, 0);
      animateTyping('cardholderName', placeholderTexts.cardholderName, 200);
      animateTyping('expiryDate', placeholderTexts.expiryDate, 400);
      animateTyping('cvv', placeholderTexts.cvv, 600);
    }
  }, [currentStep]);

  // Tour details
  const tour = tourData || {
    id: tourId,
    title: 'Amazing Tour Package',
    location: 'Maldives',
    price: 1299,
    rating: 4.9,
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop'
  };

  const steps = [
    { id: 1, name: 'Personal Info', icon: User },
    { id: 2, name: 'Travel Details', icon: Calendar },
    { id: 3, name: 'Payment', icon: CreditCard }
  ];

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(' ');
  };

  // Format expiry date
  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\//g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleInputChange = (field, value) => {
    let formattedValue = value;

    if (field === 'cardNumber') {
      formattedValue = formatCardNumber(value.replace(/\D/g, '').slice(0, 16));
    } else if (field === 'expiryDate') {
      formattedValue = formatExpiryDate(value.replace(/\D/g, '').slice(0, 4));
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    } else if (field === 'phone' || field === 'emergencyPhone') {
      formattedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (step === 2) {
      if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
      if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
      if (formData.checkIn && formData.checkOut && new Date(formData.checkOut) <= new Date(formData.checkIn)) {
        newErrors.checkOut = 'Check-out must be after check-in';
      }
    }

    if (step === 3) {
      if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length !== 16) {
        newErrors.cardNumber = 'Valid card number required';
      }
      if (!formData.expiryDate || formData.expiryDate.length !== 5) {
        newErrors.expiryDate = 'Valid expiry date required (MM/YY)';
      }
      if (!formData.cvv || formData.cvv.length !== 3) {
        newErrors.cvv = 'Valid CVV required (3 digits)';
      }
      if (!formData.cardholderName) {
        newErrors.cardholderName = 'Cardholder name required';
      }
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingComplete(true);
    }, 2000);
  };

  const totalPrice = tour.price * (formData.adults + formData.children * 0.5);
  const tax = totalPrice * 0.18;
  const finalTotal = totalPrice + tax;

  const today = new Date().toISOString().split('T')[0];

  if (bookingComplete) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Booking Confirmed! 🎉
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 px-2">
            Your booking for <span className="font-bold text-teal-600 dark:text-teal-400">{tour.title}</span> has been confirmed!
          </p>
          
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Booking ID</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">BK-{Date.now().toString().slice(-8)}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Amount</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">₹{finalTotal.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Guest Name</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white truncate">{formData.fullName}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white break-all">{formData.email}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Back to Home</span>
            </button>
            
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-teal-500 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <Printer className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Print Receipt</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-3 sm:mb-4 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back to Tours</span>
          </button>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Complete Your Booking
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Fill in your details to confirm your amazing journey
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-6 sm:mb-8 overflow-x-auto pb-2">
          <div className="flex items-center justify-between min-w-[300px] sm:min-w-0 max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white scale-110 shadow-lg'
                          : isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                      ) : (
                        <StepIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                      )}
                    </div>
                    <p className={`mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-medium text-center ${
                      isActive ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {step.name}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-1 sm:mx-2 transition-all duration-300 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4 sm:space-y-6 animate-fade-in">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center space-x-2">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
                      <span>Personal Information</span>
                    </h2>

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder={placeholders.fullName}
                          className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
                            errors.fullName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder={placeholders.email}
                            className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
                              errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base`}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder={placeholders.phone}
                            maxLength="10"
                            className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
                              errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Date of Birth */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          max={today}
                          className={`w-full px-4 py-2.5 sm:py-3 border-2 ${
                            errors.dateOfBirth ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base`}
                        />
                        {errors.dateOfBirth && (
                          <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.dateOfBirth}</span>
                          </p>
                        )}
                      </div>

                      {/* Nationality */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nationality
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            value={formData.nationality}
                            onChange={(e) => handleInputChange('nationality', e.target.value)}
                            placeholder={placeholders.nationality}
                            className="w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Passport Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Passport Number (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.passportNumber}
                        onChange={(e) => handleInputChange('passportNumber', e.target.value.toUpperCase())}
                        placeholder={placeholders.passportNumber}
                        className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                      />
                    </div>
                  </div>
                )}

{/* Step 2: Travel Details */}
{currentStep === 2 && (
  <div className="space-y-4 sm:space-y-6 animate-fade-in">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center space-x-2">
      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
      <span>Travel Details</span>
    </h2>

    {/* Check-in & Check-out Dates */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Check-in Date *
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <input
            type="date"
            value={formData.checkIn}
            onChange={(e) => handleInputChange('checkIn', e.target.value)}
            min={today}
            className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
              errors.checkIn ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base`}
          />
        </div>
        {errors.checkIn && (
          <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.checkIn}</span>
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Check-out Date *
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <input
            type="date"
            value={formData.checkOut}
            onChange={(e) => handleInputChange('checkOut', e.target.value)}
            min={formData.checkIn || today}
            className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
              errors.checkOut ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base`}
          />
        </div>
        {errors.checkOut && (
          <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.checkOut}</span>
          </p>
        )}
      </div>
    </div>

    {/* Number of Travelers */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Adults *
        </label>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-teal-500 dark:hover:bg-teal-600 text-gray-900 dark:text-white hover:text-white rounded-lg transition-all font-bold"
          >
            -
          </button>
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">{formData.adults}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Adults (18+)</span>
          </div>
          <button
            type="button"
            onClick={() => handleInputChange('adults', Math.min(10, formData.adults + 1))}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-teal-500 dark:hover:bg-teal-600 text-gray-900 dark:text-white hover:text-white rounded-lg transition-all font-bold"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Children
        </label>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => handleInputChange('children', Math.max(0, formData.children - 1))}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-teal-500 dark:hover:bg-teal-600 text-gray-900 dark:text-white hover:text-white rounded-lg transition-all font-bold"
          >
            -
          </button>
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">{formData.children}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Children (0-17)</span>
          </div>
          <button
            type="button"
            onClick={() => handleInputChange('children', Math.min(5, formData.children + 1))}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-teal-500 dark:hover:bg-teal-600 text-gray-900 dark:text-white hover:text-white rounded-lg transition-all font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>

    {/* Room Type */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Room Type
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => handleInputChange('roomType', 'standard')}
          className={`relative p-4 rounded-lg border-2 transition-all text-left ${
            formData.roomType === 'standard'
              ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-teal-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Hotel className="w-5 h-5 text-teal-500" />
              <span className="font-semibold text-gray-900 dark:text-white">Standard</span>
            </div>
            {formData.roomType === 'standard' && (
              <CheckCircle className="w-5 h-5 text-teal-500" />
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Comfortable room with basic amenities</p>
          <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">Base price included</p>
        </button>

        <button
          type="button"
          onClick={() => handleInputChange('roomType', 'deluxe')}
          className={`relative p-4 rounded-lg border-2 transition-all text-left ${
            formData.roomType === 'deluxe'
              ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-teal-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-gray-900 dark:text-white">Deluxe</span>
            </div>
            {formData.roomType === 'deluxe' && (
              <CheckCircle className="w-5 h-5 text-teal-500" />
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Luxury room with premium amenities</p>
          <p className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-2">+₹200/night</p>
        </button>
      </div>
    </div>

    {/* Emergency Contact */}
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
      <div className="flex items-start space-x-2 mb-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Emergency Contact Information</h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
            Please provide emergency contact details for safety purposes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Contact Name
          </label>
          <input
            type="text"
            value={formData.emergencyContact}
            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
            placeholder={placeholders.emergencyContact}
            className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Contact Phone
          </label>
          <input
            type="tel"
            value={formData.emergencyPhone}
            onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
            placeholder={placeholders.emergencyPhone}
            maxLength="10"
            className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
          />
        </div>
      </div>
    </div>

    {/* Special Requests */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Special Requests (Optional)
      </label>
      <textarea
        value={formData.specialRequests}
        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
        rows="4"
        placeholder="Any special requirements, dietary restrictions, or accessibility needs..."
        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none text-sm sm:text-base"
      ></textarea>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        Maximum 500 characters
      </p>
    </div>
  </div>
)}

{/* Step 3: Payment */}
{currentStep === 3 && (
  <div className="space-y-4 sm:space-y-6 animate-fade-in">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center space-x-2">
      <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
      <span>Payment Information</span>
    </h2>

    {/* Security Notice */}
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <div className="flex items-start space-x-2">
        <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Secure Payment</h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
            Your payment information is encrypted and secure. We never store your card details.
          </p>
        </div>
      </div>
    </div>

    {/* Card Number */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Card Number *
      </label>
      <div className="relative">
        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={formData.cardNumber}
          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
          placeholder={placeholders.cardNumber}
          maxLength="19"
          className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
            errors.cardNumber ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base tracking-wider`}
        />
        {/* Card Brand Icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
          <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-[8px] font-bold flex items-center justify-center">VISA</div>
          <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
      {errors.cardNumber && (
        <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
          <AlertCircle className="w-3 h-3" />
          <span>{errors.cardNumber}</span>
        </p>
      )}
    </div>

    {/* Cardholder Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Cardholder Name *
      </label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={formData.cardholderName}
          onChange={(e) => handleInputChange('cardholderName', e.target.value.toUpperCase())}
          placeholder={placeholders.cardholderName}
          className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
            errors.cardholderName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base uppercase`}
        />
      </div>
      {errors.cardholderName && (
        <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
          <AlertCircle className="w-3 h-3" />
          <span>{errors.cardholderName}</span>
        </p>
      )}
    </div>

    {/* Expiry Date & CVV */}
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Expiry Date *
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={formData.expiryDate}
            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
            placeholder={placeholders.expiryDate}
            maxLength="5"
            className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
              errors.expiryDate ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base tracking-wider`}
          />
        </div>
        {errors.expiryDate && (
          <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.expiryDate}</span>
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          CVV *
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="password"
            value={formData.cvv}
            onChange={(e) => handleInputChange('cvv', e.target.value)}
            placeholder={placeholders.cvv}
            maxLength="3"
            className={`w-full pl-11 pr-4 py-2.5 sm:py-3 border-2 ${
              errors.cvv ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base tracking-widest`}
          />
          <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 cursor-help" title="3-digit security code on back of card" />
        </div>
        {errors.cvv && (
          <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.cvv}</span>
          </p>
        )}
      </div>
    </div>

    {/* Order Summary */}
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 sm:p-6">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center space-x-2">
        <DollarSign className="w-5 h-5 text-teal-500" />
        <span>Payment Summary</span>
      </h4>

      <div className="space-y-2 sm:space-y-3">
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-gray-600 dark:text-gray-300">Tour Package</span>
          <span className="font-medium text-gray-900 dark:text-white">₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-gray-600 dark:text-gray-300">Taxes & Fees (18%)</span>
          <span className="font-medium text-gray-900 dark:text-white">₹{tax.toFixed(2)}</span>
        </div>
        <div className="border-t-2 border-gray-300 dark:border-gray-500 pt-2 sm:pt-3 flex justify-between items-center">
          <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Total Amount</span>
          <span className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400">₹{finalTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>

    {/* Terms & Conditions */}
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <label className="flex items-start cursor-pointer group">
        <input
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
          className="mt-1 w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
        />
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
          I agree to the{' '}
          <a href="/terms" className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
            Terms & Conditions
          </a>
          {' '}and{' '}
          <a href="/privacy" className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
            Privacy Policy
          </a>
          . I authorize TravelWorld to charge my card for this booking.
        </span>
      </label>
      {errors.agreeToTerms && (
        <p className="mt-2 text-xs text-red-500 flex items-center space-x-1 ml-8">
          <AlertCircle className="w-3 h-3" />
          <span>{errors.agreeToTerms}</span>
        </p>
      )}
    </div>

    {/* Final Notice */}
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
      <div className="flex items-start space-x-2">
        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
            You're almost there!
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
            Complete your payment to confirm your booking. A confirmation email will be sent to {formData.email || 'your email'}.
          </p>
        </div>
      </div>
    </div>
  </div>
)}
               {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium text-sm sm:text-base"
                    >
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Previous</span>
                    </button>
                  )}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto sm:ml-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-lg transition-all font-semibold shadow-lg transform hover:scale-105 text-sm sm:text-base"
                    >
                      <span>Continue</span>
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto sm:ml-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-lg transition-all font-semibold shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Complete Booking</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Booking Summary Sidebar - COMPLETE WITH IMAGE */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-24">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center space-x-2">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                <span>Booking Summary</span>
              </h3>

              {/* Tour Image */}
              <div className="relative h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 sm:px-3 py-1 flex items-center space-x-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{tour.rating}</span>
                </div>
              </div>

              {/* Tour Info */}
              <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">{tour.title}</h4>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0" />
                  <span>{formData.adults} Adults, {formData.children} Children</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Base Price × {formData.adults}</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹{tour.price * formData.adults}</span>
                </div>
                
                {formData.children > 0 && (
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Children × {formData.children}</span>
                    <span className="font-medium text-gray-900 dark:text-white">₹{(tour.price * 0.5 * formData.children).toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Taxes & Fees (18%)</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹{tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 sm:pt-3 flex justify-between items-center">
                  <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400">₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-4 sm:mt-6 space-y-2">
                {[
                  { icon: CheckCircle, text: 'Free cancellation up to 48h' },
                  { icon: Shield, text: 'Secure payment guarantee' },
                  { icon: Award, text: 'Best price guarantee' },
                  { icon: MessageCircle, text: '24/7 customer support' }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
