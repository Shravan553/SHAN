// src/MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SetViewOnClick = ({ position }) => {
  const map = useMap();
  map.setView(position, 13); // Set zoom to 13 when map loads
  return null;
};

const MapComponent = () => {
  const position = [13.012349, 77.556224]; // Your latitude and longitude

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          World Trade Centre, Unit No 2217, 22nd Floor, Malleshwaram (W), Next Orion Mall, Bangalore, Karnataka 560055, IN
        </Popup>
      </Marker>
      {/* Ensure the view is set when the component renders */}
      <SetViewOnClick position={position} />
    </MapContainer>
  );
};
 
export default MapComponent;
