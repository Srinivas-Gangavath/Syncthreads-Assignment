import { useEffect, useState } from 'react';
import api from '../api';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const MapContainerWrapper = styled.div`
  padding: 30px; 
`;
const Title = styled.h2`
  color: info; display: flex; justify-content: center;
`
function MapView() {
  const [mapConfig, setMapConfig] = useState(null);

  useEffect(() => {
    api.get('/map')
      .then(res => setMapConfig(res.data))
      .catch(() => alert('User not logged in'));
  }, []);

  if (!mapConfig) return <p>Loading Map...</p>;

  return (
    <MapContainerWrapper>
      <Title>Map View</Title>
      <MapContainer center={mapConfig.center} zoom={mapConfig.zoom} style={{ height: '500px', width: '100%' }} ZoomControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        
      </MapContainer>
    </MapContainerWrapper>
  );
}

export default MapView;
