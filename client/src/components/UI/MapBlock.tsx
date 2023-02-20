// import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export const MapBlock = ({ mapWidth, mapHeight }) => {
  const mapData = {
    center: [53.92751803192662, 27.49040140069119],
    zoom: 16,
    controls: ['zoomControl', 'fullscreenControl'],
  };

  const coordinates = [53.92751803192662, 27.49040140069119];

  return (
    <YMaps>
      <Map
        style={{ width: mapWidth, height: mapHeight }}
        defaultState={mapData}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
};

export default MapBlock;
