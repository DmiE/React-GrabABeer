import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './outputMap.module.scss';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { firestore } from '../../../firebase';
import { apiCall } from '../../../common/utilities';

const position = [50.062402, 19.942432];

const OutputMap = props => {
  const [markers, setMarkers] = useState([]);

  const fetchBeerLocation = async () => {
    let query = firestore.collection('places');
    let fetchedLocations = [];

    if (props.activeBeer) {
      query = query.doc(props.activeBeer);
      try {
        fetchedLocations = await query.get();
        console.log(
          fetchedLocations.data().locations.map(doc => {
            return doc;
          })
        );
      } catch (err) {
        console.log(err);
      }

      // console.log(apiCall(query));
    }
    // console.log(
    //   fetchedLocations.docs.map(doc => {
    //     return doc.data().locations;
    //   })

    console.log('activeBeer => ', props.activeBeer);

    // query.get().then(doc => {
    //   if (doc.exists) {
    //     const docData = doc.data().locations.map(doc => {
    //       return doc.locationName;
    //     });
    //     // console.log('Document data:', doc.data().locations);
    //     console.log(docData);
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log('No such document!');
    //   }
    // });
  };

  useEffect(() => {
    if (props.activeBeer !== '') {
      // wysłanie zapytania do api o array z nazwami i lokalizacjami
      // utowrzenie markera dla kazdego z wynikow
      // const newMarkers = props.activeBeer.map(item => {
      //   return (
      //     <Marker position={position} key={item.name}>
      //       <Popup>{item.name}</Popup>
      //     </Marker>
      //   );
      // });
      // setMarkers(newMarkers);
      fetchBeerLocation();
    }
  }, [props.activeBeer, setMarkers]);

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
    activeBeer: state.activeBeer
  };
};

export default connect(mapStateToProps)(OutputMap);
