// src/components/Destinations/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="group perspective-1000 h-80">
      <div className="relative preserve-3d w-full h-full transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="text-sm opacity-90">{destination.location}</p>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 flex flex-col justify-center items-center text-white">
          <h3 className="text-2xl font-bold mb-4">{destination.name}</h3>
          <p className="text-center mb-4 text-sm">{destination.description}</p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{destination.duration}</span>
            </div>
            <div className="flex justify-between">
              <span>Price:</span>
              <span>{destination.price}</span>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
