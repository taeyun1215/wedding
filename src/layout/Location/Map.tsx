import data from 'data.json';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '300px',
      }}>
      <NaverMap
        defaultCenter={new navermaps.LatLng(lat, lon)}
        defaultZoom={17}
        draggable={true}
        pinchZoom={true}
        scrollWheel={true}
        keyboardShortcuts={true}>
        <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
