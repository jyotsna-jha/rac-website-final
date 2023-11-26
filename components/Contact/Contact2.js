// GoogleMap.js
"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const locationCoordinates = {
  lat: 27.6941142,
  lng: 85.3158304,
};

const GoogleMapComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="w-full h-400px mt-8 mb-16">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap 
          mapContainerStyle={{ width: '100%', height: '100%' }} 
          center={locationCoordinates} 
          zoom={16} 
          className="w-full h-full"
        >
          <Marker 
            position={locationCoordinates} 
            icon={{ path: 'M12 ...' }} 
            className="text-red-500 text-2xl mt-neg-2"
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
