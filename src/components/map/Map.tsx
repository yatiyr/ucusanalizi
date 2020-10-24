import React  from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';
import { latLngBounds } from 'leaflet';

class Map extends React.Component {
    render() : JSX.Element {
      return (
        <LeafletMap
          center={[42, 35]}
          minZoom={7}
          zoom={7}
          zoomSnap={0.05}
          maxBounds={latLngBounds([[40,16],[47,48]])}
          maxZoom={15}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
          key={'267c32b7-a9ab-44ed-96dd-f2f85c00a4a2'}
        >
          <TileLayer
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Marker position={[50, 10]}>
            <Popup>
              Popup for any custom information.
            </Popup>
          </Marker>
        </LeafletMap>
      );
    }
}

export default Map;
