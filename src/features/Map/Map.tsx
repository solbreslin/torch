import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

type Props = {
  coordinates: [number, number];
};

export const Map: React.FC<Props> = ({ coordinates }) => {
  return (
    <div style={{ height: 400 }}>
      <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}></Marker>
      </MapContainer>
    </div>
  );
};
