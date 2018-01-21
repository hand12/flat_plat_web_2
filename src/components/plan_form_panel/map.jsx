import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `250px`, "marginTop": `20px` } } />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
		defaultCenter={{ ...props.default_center }}
		center={{ ...props.pin_location}}
  >
		{props.isMarkerShown && <Marker position={{ ...props.pin_location }} animation={ 2 }/>}
  </GoogleMap>
)

export default Map;