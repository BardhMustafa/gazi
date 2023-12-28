import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

interface MapsContainerProps {
  height: string;
}

const MapsContainer = ({ height }: MapsContainerProps) => {
  const lat = 42.461121;
  const lon = 21.48201;

  const handlePopupClick = () => {
    if (typeof window !== 'undefined') {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
        '_blank'
      );
    }
  };

  return (
    <MapContainer
      center={[42.461121, 21.48201]}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height, width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[42.461121, 21.48201]}>
        <Popup>
          <PopupContent onClick={handlePopupClick}>
            <p>This is us (click to open in Google Maps)</p>
          </PopupContent>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapsContainer;

const PopupContent = styled.div`
  cursor: pointer;

  p {
    margin: 0;
    text-decoration: underline;

    &:hover {
      color: #d42539;
    }
  }
`;
