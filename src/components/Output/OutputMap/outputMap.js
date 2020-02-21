import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './outputMap.module.scss';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


const position = [50.062402, 19.942432];

const OutputMap = (props) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if(props.fetchedBeers.length !== 0) {
      const newMarkers = props.fetchedBeers.map(item => {
        return (
          <Marker position={position} key={item.name}>
            <Popup>
              {item.name}
            </Popup>
          </Marker>
        )
      })
      setMarkers(newMarkers)
    }
  }, [props.fetchedBeers, setMarkers])

  return (
    <div className={classes.map__container}>
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          maxZoom="20"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {markers}
      </Map>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchedBeers: state.fetchedBeers
  };
};

export default connect(mapStateToProps)(OutputMap);
