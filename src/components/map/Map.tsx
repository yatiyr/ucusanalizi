/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React  from 'react';
import ReactDOMServer from 'react-dom/server';
import { Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';
import { latLngBounds, divIcon } from 'leaflet';
import { ProgressPlugin } from 'webpack';
import Flight from '../../analiz/Ucus';


type Props = {flights: any[]};
type State = any;


type PlaneProps = any;
type PlaneState = any;

class Plane extends React.Component<PlaneProps,PlaneState> {
    
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
          <svg className="planeSvg" width="42.461px" height="45.382px" version="1.1" viewBox="0 0 46.749 48.352" xmlns="http://www.w3.org/2000/svg" transform={`rotate(${this.props.trueTrack})`}>
            <path d="m24.968-0.09257q1.8993 1.8993 1.8993 8.4048l1e-5 10.479 19.407 13.164 0.15247 0.10948q0.30562 0.30562 0.30566 0.69857l-7e-6 2.7943q2.4e-5 0.39294-0.30562 0.69858-0.45843 0.45843-1.026 0.24015l-18.534-6.571 6e-6 10.697q6.6802 3.7112 6.9858 4.0168 0.30562 0.30562 0.30566 0.69857l-7e-6 2.7943q2.4e-5 0.39294-0.30562 0.69858-0.39297 0.39297-0.96056 0.26199l-9.4963-2.7288-9.4963 2.7288q-0.56761 0.17465-0.98238-0.24012-0.30562-0.30562-0.30566-0.69857l-0.02197-2.8161q-2.3e-5 -0.39294 0.30566-0.69861 0.30562-0.30562 6.9858-4.0168l-7e-6 -10.697-18.534 6.571q-0.56759 0.21832-1.026-0.24015-0.30562-0.30562-0.30566-0.69857l-1.7e-5 -2.7943q-2.3e-5 -0.39294 0.30562-0.69861 0.08724-0.08724 0.15271-0.10921l19.407-13.164-6e-6 -10.479q0-6.5055 1.8993-8.4048 0.69858-0.69858 1.5936-0.69856 0.89506-6.7e-6 1.5936 0.69857z" opacity="1" fill="#fff"/>
          </svg>
        );
    }
}

class Map extends React.Component<Props, State> {

    constructor(props: any) {
      super(props);
    }

    givePlaneSvgs() {

      var array = [];

      for(var i=0; i<this.props.flights.length; i++) {
        const latitude: number = this.props.flights[i].latitude;
        const longitude: number = this.props.flights[i].longitude;
        const true_track: number = this.props.flights[i].true_track;
        const icon = divIcon({className: 'planeSvg', html: ReactDOMServer.renderToString(<Plane trueTrack={true_track} />)})

        var elem = <Marker key={this.props.flights[i]} position={[latitude, longitude]} icon={icon} ></Marker>
        array.push(elem);
      }

      return array;
      
    }
    
    render() : JSX.Element {
      return (
        <LeafletMap
          center={[42, 35]}
          minZoom={5}
          zoom={7}
          zoomSnap={0.05}
          maxBounds={latLngBounds([[30,15],[50,50]])}
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
          {this.givePlaneSvgs()}


        </LeafletMap>
      );
    }
}

export default Map;
