// src/pages/TourDetail.jsx - FULLY FIXED VERSION
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  Clock, 
  DollarSign,
  Check,
  Heart,
  Share2,
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Shield,
  Award,
  TrendingUp,
  MessageCircle,
  X
} from 'lucide-react';

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Complete tour data with ALL tours (1-9)
  const tourData = {
    1: {
      id: 1,
      title: 'Swiss Alps Adventure',
      location: 'Switzerland',
      rating: 4.9,
      reviews: 245,
      price: 115000,
      duration: '7 Days / 6 Nights',
      groupSize: '2-12 People',
      description: 'Experience breathtaking mountain views and pristine alpine landscapes.',
      longDescription: 'Embark on an unforgettable journey through the Swiss Alps, where majestic mountains meet crystal-clear lakes and charming alpine villages. This comprehensive tour offers a perfect blend of adventure, culture, and relaxation.',
      images: [
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Visit the iconic Matterhorn',
        'Scenic train rides through the Alps',
        'Stay in luxury mountain lodges',
        'Guided hiking tours',
        'Traditional Swiss cuisine',
        'Cable car to Jungfraujoch'
      ],
      included: [
        '6 nights accommodation',
        'Daily breakfast and 3 dinners',
        'All transfers and transportation',
        'Professional tour guide',
        'Entrance fees to attractions',
        'Travel insurance'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Zurich',
          description: 'Welcome to Switzerland! Transfer to your hotel and enjoy a welcome dinner.'
        },
        {
          day: 2,
          title: 'Zurich to Interlaken',
          description: 'Scenic train journey through the Swiss countryside. Explore Interlaken town.'
        },
        {
          day: 3,
          title: 'Jungfraujoch - Top of Europe',
          description: 'Visit the highest railway station in Europe. Breathtaking alpine views.'
        },
        {
          day: 4,
          title: 'Interlaken to Zermatt',
          description: 'Travel to Zermatt, home of the iconic Matterhorn mountain.'
        },
        {
          day: 5,
          title: 'Zermatt Exploration',
          description: 'Full day to explore Zermatt, optional activities and hiking trails.'
        },
        {
          day: 6,
          title: 'Gornergrat Railway',
          description: 'Ride the historic Gornergrat railway for stunning panoramic views.'
        },
        {
          day: 7,
          title: 'Departure',
          description: 'Transfer to airport for your departure flight. Auf Wiedersehen!'
        }
      ],
      toursAvailable: 24
    },
    2: {
      id: 2,
      title: 'Maldives Paradise Escape',
      location: 'Maldives',
      rating: 5.0,
      reviews: 189,
      price: 220000,
      duration: '5 Days / 4 Nights',
      groupSize: '2-8 People',
      description: 'Discover crystal-clear waters and overwater villas in this tropical paradise.',
      longDescription: 'Experience the ultimate tropical getaway in the Maldives, where pristine white-sand beaches meet turquoise waters. Stay in luxurious overwater villas, snorkel in vibrant coral reefs, and indulge in world-class spa treatments.',
      images: [
        'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Luxury overwater villa accommodation',
        'Private beach access',
        'Snorkeling and diving',
        'Spa treatments included',
        'Sunset dolphin cruise',
        'All meals included'
      ],
      included: [
        '4 nights overwater villa',
        'All meals and beverages',
        'Airport transfers by speedboat',
        'Water sports activities',
        'Spa treatment (2 sessions)',
        'Sunset cruise'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Welcome',
          description: 'Speedboat transfer to resort. Welcome cocktail and resort orientation.'
        },
        {
          day: 2,
          title: 'Beach & Water Sports',
          description: 'Snorkeling, kayaking, and beach relaxation. Sunset cruise.'
        },
        {
          day: 3,
          title: 'Spa Day',
          description: 'Indulge in luxury spa treatments. Private beach dinner.'
        },
        {
          day: 4,
          title: 'Island Hopping',
          description: 'Visit local islands and experience Maldivian culture.'
        },
        {
          day: 5,
          title: 'Departure',
          description: 'Leisurely breakfast and transfer to airport.'
        }
      ],
      toursAvailable: 18
    },
    3: {
      id: 3,
      title: 'Rome Historic Journey',
      location: 'Italy',
      rating: 4.8,
      reviews: 312,
      price: 150000,
      duration: '4 Days / 3 Nights',
      groupSize: '4-15 People',
      description: 'Walk through ancient history and experience timeless Roman charm.',
      longDescription: 'Discover the Eternal City with expert guides as you explore ancient ruins, Renaissance art, and authentic Italian cuisine. From the Colosseum to the Vatican, experience 2,000 years of history in one of the world\'s most captivating cities.',
      images: [
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Skip-the-line Colosseum tour',
        'Vatican Museums & Sistine Chapel',
        'Trevi Fountain & Spanish Steps',
        'Traditional Italian cooking class',
        'Trastevere food tour',
        'Professional historian guide'
      ],
      included: [
        '3 nights central hotel accommodation',
        'Daily breakfast buffet',
        'Skip-the-line entrance tickets',
        'Professional English-speaking guide',
        'Italian cooking class',
        'Evening food tour in Trastevere'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Ancient Rome & Colosseum',
          description: 'Start your journey with skip-the-line access to the Colosseum, Roman Forum, and Palatine Hill.'
        },
        {
          day: 2,
          title: 'Vatican City & Renaissance Art',
          description: 'Explore Vatican Museums, marvel at the Sistine Chapel ceiling, and visit St. Peter\'s Basilica.'
        },
        {
          day: 3,
          title: 'Roman Culture & Cuisine',
          description: 'Morning cooking class learning authentic pasta and tiramisu. Evening food tour through Trastevere.'
        },
        {
          day: 4,
          title: 'Baroque Rome & Departure',
          description: 'Visit Trevi Fountain, Pantheon, and Spanish Steps. Free time for shopping before departure.'
        }
      ],
      toursAvailable: 32
    },
    4: {
      id: 4,
      title: 'Paris Romance Experience',
      location: 'France',
      rating: 4.9,
      reviews: 267,
      price: 145000,
      duration: '6 Days / 5 Nights',
      groupSize: '2-10 People',
      description: 'Experience the city of love with iconic landmarks and gourmet cuisine.',
      longDescription: 'Fall in love with Paris as you explore world-famous museums, stroll along the Seine, and indulge in exquisite French cuisine. From the Eiffel Tower to Montmartre, discover why Paris is the most romantic city in the world.',
      images: [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1623009070764-45002990256e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzJTIwc3RyZWV0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400'
      ],
      highlights: [
        'Eiffel Tower priority access',
        'Louvre Museum guided tour',
        'Seine River dinner cruise',
        'Montmartre & Sacré-Cœur',
        'French pastry-making class',
        'Versailles Palace day trip'
      ],
      included: [
        '5 nights boutique hotel in central Paris',
        'Daily French breakfast',
        'Museum skip-the-line passes',
        'Seine River cruise with dinner',
        'Versailles day trip with guide',
        'Metro travel pass'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Bonjour Paris!',
          description: 'Arrival and hotel check-in. Evening stroll along Champs-Élysées. Welcome dinner at bistro.'
        },
        {
          day: 2,
          title: 'Iconic Landmarks',
          description: 'Priority access to Eiffel Tower summit. Afternoon at Trocadéro Gardens. Evening Seine River cruise.'
        },
        {
          day: 3,
          title: 'Art & Culture',
          description: 'Guided tour of Louvre Museum including Mona Lisa. Explore Latin Quarter and Notre-Dame area.'
        },
        {
          day: 4,
          title: 'Montmartre & Pastry Class',
          description: 'Morning walking tour of Montmartre. Afternoon French pastry workshop. Sunset at Sacré-Cœur.'
        },
        {
          day: 5,
          title: 'Versailles Palace',
          description: 'Full-day trip to Palace of Versailles with skip-the-line access. Explore Hall of Mirrors and gardens.'
        },
        {
          day: 6,
          title: 'Au Revoir Paris',
          description: 'Free morning for last-minute shopping or café time. Transfer to airport for departure.'
        }
      ],
      toursAvailable: 28
    },
    5: {
      id: 5,
      title: 'Tokyo Explorer Adventure',
      location: 'Japan',
      rating: 4.7,
      reviews: 198,
      price: 168000,
      duration: '8 Days / 7 Nights',
      groupSize: '4-12 People',
      description: 'Discover ancient temples, cutting-edge technology, and unique Japanese culture.',
      longDescription: 'Experience the perfect blend of ancient tradition and futuristic innovation in Japan\'s capital. From serene temples to neon-lit streets, witness the fascinating contrast that makes Tokyo one of the world\'s most exciting cities.',
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Tokyo Skytree observation deck',
        'Mount Fuji day trip',
        'Traditional tea ceremony',
        'Sushi-making masterclass',
        'Shibuya crossing & Harajuku',
        'Anime & gaming district tour'
      ],
      included: [
        '7 nights hotel accommodation',
        'JR Rail Pass (7 days)',
        'English-speaking guide',
        'Daily breakfast',
        'Cultural workshop experiences',
        'All entrance fees'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Tokyo',
          description: 'Airport pickup and hotel check-in. Evening orientation walk through Shinjuku.'
        },
        {
          day: 2,
          title: 'Traditional Tokyo',
          description: 'Visit Senso-ji Temple in Asakusa. Participate in authentic tea ceremony.'
        },
        {
          day: 3,
          title: 'Modern Tokyo',
          description: 'Tokyo Skytree observation deck. Shibuya crossing experience. Evening in Harajuku.'
        },
        {
          day: 4,
          title: 'Mount Fuji Day Trip',
          description: 'Full-day excursion to Mount Fuji and Lake Kawaguchi. Visit Chureito Pagoda.'
        },
        {
          day: 5,
          title: 'Tsukiji & Sushi Experience',
          description: 'Early morning Tsukiji Outer Market tour. Hands-on sushi-making class.'
        },
        {
          day: 6,
          title: 'Akihabara & Pop Culture',
          description: 'Explore anime and gaming district. Visit themed cafés. Robot Restaurant show.'
        },
        {
          day: 7,
          title: 'Nikko UNESCO Site',
          description: 'Day trip to Nikko\'s stunning shrines. Visit Toshogu Shrine and Kegon Falls.'
        },
        {
          day: 8,
          title: 'Sayonara Tokyo',
          description: 'Free morning for last-minute shopping in Ginza. Airport transfer.'
        }
      ],
      toursAvailable: 22
    },
    6: {
      id: 6,
      title: 'Kenya Safari Adventure',
      location: 'Kenya',
      rating: 4.9,
      reviews: 156,
      price: 205000,
      duration: '7 Days / 6 Nights',
      groupSize: '4-8 People',
      description: 'Witness incredible wildlife including the Big Five in their natural habitat.',
      longDescription: 'Embark on the adventure of a lifetime in Kenya\'s world-renowned safari parks. Witness lions, elephants, rhinos, leopards, and buffalo while staying in luxury lodges with stunning views of the African savanna.',
      images: [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Big Five wildlife encounters',
        'Masai Mara game reserve',
        'Hot air balloon safari',
        'Masai village cultural visit',
        'Professional safari guides',
        'Luxury lodge accommodation'
      ],
      included: [
        '6 nights luxury safari lodge',
        'All meals and beverages',
        '4x4 safari vehicle',
        'Professional wildlife guide',
        'Park entrance fees',
        'Hot air balloon ride'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Nairobi Arrival',
          description: 'Meet and greet at airport. Transfer to safari lodge. Evening sunset game drive.'
        },
        {
          day: 2,
          title: 'Masai Mara Full Day',
          description: 'Full-day game drives in Masai Mara. Picnic lunch in the bush. Search for the Big Five.'
        },
        {
          day: 3,
          title: 'Hot Air Balloon Safari',
          description: 'Dawn hot air balloon ride over the savanna. Champagne breakfast in the bush.'
        },
        {
          day: 4,
          title: 'Masai Cultural Experience',
          description: 'Visit traditional Masai village. Learn about culture and traditions.'
        },
        {
          day: 5,
          title: 'Lake Nakuru',
          description: 'Transfer to Lake Nakuru. Famous for flamingos and rhinos. Afternoon game drive.'
        },
        {
          day: 6,
          title: 'Amboseli National Park',
          description: 'Travel to Amboseli with views of Mount Kilimanjaro. Elephant encounters.'
        },
        {
          day: 7,
          title: 'Departure',
          description: 'Morning game drive. Transfer back to Nairobi for departure flight.'
        }
      ],
      toursAvailable: 15
    },
    7: {
      id: 7,
      title: 'Bali Tropical Retreat',
      location: 'Indonesia',
      rating: 4.8,
      reviews: 234,
      price: 105000,
      duration: '6 Days / 5 Nights',
      groupSize: '2-10 People',
      description: 'Relax in tropical paradise with pristine beaches and ancient temples.',
      longDescription: 'Escape to the Island of the Gods for a perfect blend of relaxation, culture, and adventure. From stunning rice terraces to pristine beaches, experience Bali\'s unique spirituality and natural beauty.',
      images: [
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Beachfront villa accommodation',
        'Ubud rice terrace trekking',
        'Tanah Lot sunset temple',
        'Traditional Balinese massage',
        'Tirta Empul holy spring',
        'Daily yoga sessions'
      ],
      included: [
        '5 nights beachfront villa',
        'Daily breakfast and 3 dinners',
        'Airport transfers',
        'Temple entrance fees',
        'Balinese spa treatments',
        'Yoga classes'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Welcome to Bali',
          description: 'Airport pickup and villa check-in. Welcome dinner on the beach.'
        },
        {
          day: 2,
          title: 'Ubud Culture & Nature',
          description: 'Visit Tegalalang Rice Terraces. Monkey Forest sanctuary. Traditional dance performance.'
        },
        {
          day: 3,
          title: 'Temples & Spirituality',
          description: 'Visit Tirta Empul holy spring temple. Purification ceremony. Evening at Tanah Lot.'
        },
        {
          day: 4,
          title: 'Beach & Spa Day',
          description: 'Morning yoga session. Full Balinese massage and spa treatment. Relax by the beach.'
        },
        {
          day: 5,
          title: 'Water Adventures',
          description: 'Snorkeling at Blue Lagoon. Visit Tegenungan Waterfall. Beach barbecue dinner.'
        },
        {
          day: 6,
          title: 'Departure',
          description: 'Morning yoga and breakfast. Free time for last-minute shopping. Airport transfer.'
        }
      ],
      toursAvailable: 25
    },
    8: {
      id: 8,
      title: 'Iceland Northern Lights',
      location: 'Iceland',
      rating: 5.0,
      reviews: 178,
      price: 160000,
      duration: '5 Days / 4 Nights',
      groupSize: '4-12 People',
      description: 'Chase the aurora borealis and explore dramatic volcanic landscapes.',
      longDescription: 'Experience the magic of Iceland\'s winter wonderland. Hunt for the mesmerizing Northern Lights, explore ice caves, bathe in the Blue Lagoon, and witness the raw power of nature in the land of fire and ice.',
      images: [
        'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Northern Lights hunting',
        'Blue Lagoon spa experience',
        'Golden Circle tour',
        'Glacier hiking adventure',
        'Ice cave exploration',
        'Geothermal hot springs'
      ],
      included: [
        '4 nights accommodation',
        'Daily breakfast',
        'Super jeep tours',
        'Northern Lights hunt',
        'Blue Lagoon entrance',
        'Winter gear provided'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Blue Lagoon',
          description: 'Airport pickup and transfer to Blue Lagoon. Relax in geothermal waters.'
        },
        {
          day: 2,
          title: 'Golden Circle Tour',
          description: 'Visit Thingvellir National Park, Geysir hot springs, and Gullfoss waterfall.'
        },
        {
          day: 3,
          title: 'South Coast & Ice Cave',
          description: 'Explore black sand beaches, Skógafoss and Seljalandsfoss waterfalls. Ice cave tour.'
        },
        {
          day: 4,
          title: 'Glacier Hiking',
          description: 'Guided glacier hiking on Vatnajökull. Learn about ice formations. Evening aurora hunt.'
        },
        {
          day: 5,
          title: 'Departure',
          description: 'Morning visit to Reykjavik city. Last-minute shopping. Airport transfer.'
        }
      ],
      toursAvailable: 20
    },
    9: {
      id: 9,
      title: 'Dubai Luxury Experience',
      location: 'UAE',
      rating: 4.7,
      reviews: 289,
      price: 185000,
      duration: '5 Days / 4 Nights',
      groupSize: '2-8 People',
      description: 'Experience luxury shopping, fine dining, and stunning modern architecture.',
      longDescription: 'Discover the ultimate luxury destination where modern architecture meets Arabian hospitality. From the world\'s tallest building to pristine beaches, experience Dubai\'s extravagance and traditional desert culture.',
      images: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&h=600&fit=crop'
      ],
      highlights: [
        'Burj Khalifa At the Top',
        'Desert safari with BBQ dinner',
        '5-star luxury hotel',
        'Dubai Mall shopping spree',
        'Private yacht cruise',
        'Gold Souk visit'
      ],
      included: [
        '4 nights 5-star hotel',
        'Daily breakfast buffet',
        'Luxury airport transfers',
        'Burj Khalifa tickets',
        'Desert safari',
        'Shopping vouchers (₹10,000)'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Welcome to Dubai',
          description: 'Luxury airport pickup. Check into 5-star hotel. Evening at Dubai Marina Walk.'
        },
        {
          day: 2,
          title: 'Modern Dubai',
          description: 'Visit Burj Khalifa observation deck. Dubai Mall shopping. Evening fountain show.'
        },
        {
          day: 3,
          title: 'Desert Safari',
          description: 'Morning at leisure. Afternoon desert safari with dune bashing and BBQ dinner under stars.'
        },
        {
          day: 4,
          title: 'Yacht Cruise & Old Dubai',
          description: 'Morning private yacht cruise along Palm Jumeirah. Visit Gold and Spice Souks.'
        },
        {
          day: 5,
          title: 'Departure',
          description: 'Morning at leisure or optional activities. Last-minute shopping. Luxury transfer to airport.'
        }
      ],
      toursAvailable: 30
    }
  };

  const tour = tourData[id] || tourData[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBookNow = () => {
    navigate(`/booking/${id}`, { state: { tour } });
  };

  const handleContactUs = () => {
    setShowContactModal(true);
  };

  const contactOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our travel experts',
      action: 'tel:+919876543210',
      value: '+91 98765 43210',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions',
      action: 'mailto:info@travelworld.com',
      value: 'info@travelworld.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us now',
      action: () => navigate('/contact'),
      value: 'Start Chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Visit Contact Page',
      description: 'Get full contact details',
      action: () => navigate('/contact'),
      value: 'Go to Contact',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Tours</span>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px]">
              <img
                src={tour.images[selectedImage]}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              
              {/* Favorite & Share Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-full backdrop-blur-md transition-all ${
                    isFavorite 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/90 text-gray-700 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:bg-white transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-bold text-gray-900 dark:text-white">{tour.rating}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">({tour.reviews} reviews)</span>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4">
              {tour.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-xl overflow-hidden h-[236px] cursor-pointer transition-all ${
                    selectedImage === index 
                      ? 'ring-4 ring-blue-500 scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${tour.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-blue-500/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location */}
            <div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{tour.location}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {tour.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {tour.longDescription}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <Clock className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                <p className="font-semibold text-gray-900 dark:text-white">{tour.duration}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <Users className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Group Size</p>
                <p className="font-semibold text-gray-900 dark:text-white">{tour.groupSize}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <TrendingUp className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Available</p>
                <p className="font-semibold text-gray-900 dark:text-white">{tour.toursAvailable} tours</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                <Award className="w-6 h-6 text-blue-500" />
                <span>Tour Highlights</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-500" />
                <span>What's Included</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-500" />
                <span>Day by Day Itinerary</span>
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {day.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {day.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-2">Starting from</p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">₹{tour.price.toLocaleString()}</span>
                  <span className="text-gray-600 dark:text-gray-400">/person</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  {tour.toursAvailable} tours available
                </p>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 hover:from-teal-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                Book Now
              </button>

              <button
                onClick={handleContactUs}
                className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors mb-6 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </button>

              <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>info@travelworld.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Get in Touch</h2>
                  <p className="text-white/90 text-sm">Choose your preferred contact method</p>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  const isLink = typeof option.action === 'string';
                  
                  const handleClick = () => {
                    if (typeof option.action === 'function') {
                      option.action();
                      setShowContactModal(false);
                    } else if (isLink) {
                      window.location.href = option.action;
                    }
                  };

                  return (
                    <button
                      key={index}
                      onClick={handleClick}
                      className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-transparent hover:shadow-xl transition-all duration-300 text-left"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white mb-1 transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/90 mb-3 transition-colors">
                          {option.description}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                          {option.value}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  <span className="font-semibold">Need immediate assistance?</span> Our support team is available 24/7 to help you with your travel plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetail;
