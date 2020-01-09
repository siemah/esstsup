import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import LocationImg from '../assets/images/location.svg'

class Map extends React.Component {

  state = {
    viewport: {
      width: "100%",
      height: 250,
      latitude: 36.7557197,
      longitude: 3.0139383,
      zoom: 13
    }
  };

  render() {
    let { mapboxApiAccessToken } = this.props;
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={mapboxApiAccessToken}
      >
        <Marker latitude={36.7557197} longitude={3.0139383} offsetLeft={-20} offsetTop={-10} className='center'>
          <img src={LocationImg} height='35' alt="Association National des Financiers est ici"/>
        </Marker>
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  mapboxApiAccessToken: PropTypes.string.isRequired,
}

export default Map;