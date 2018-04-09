import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {lat: 44.8123584, lng: 20.4263598},
    zoom: 11
  };
 
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: ["AIzaSyDTcytdrkBpmBODROCcBO-dhVHKBcOHGMc"] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={44.8123584}
          lng={20.4263598}
          text={'Salon The Boss'}
        />
      </GoogleMapReact>
    );
  }
}

export default Map