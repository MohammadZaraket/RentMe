import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMapReact from 'google-map-react';
import LocationPin from '../LocationPin';
import './map.css'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCvR04Sig1U89mIlbokwSXZIOp44AzB22E' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
export default Map;