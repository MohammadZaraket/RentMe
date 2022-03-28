import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMapReact from 'google-map-react';
import './map.css'
import { ImLocation2} from "react-icons/im";
const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCvR04Sig1U89mIlbokwSXZIOp44AzB22E' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
            <h4>Apartment Here</h4>
            <ImLocation2 size={25} />

        </GoogleMapReact>
      </div>
    </div>
  )
export default Map;