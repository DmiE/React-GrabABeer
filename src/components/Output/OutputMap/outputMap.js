import React from 'react';
import classes from './outputMap.module.scss';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [50.062402, 19.942432];

const OutputMap = () => {
  return (
    <div className={classes.map__container}>
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          maxZoom="20"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default OutputMap;
