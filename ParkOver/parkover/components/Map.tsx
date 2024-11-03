import React, { useState, useEffect, useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SearchBar from '@/components/SearchBar';
import PlaceListview from './PlaceListView';
import GlobalApi from './GlobalApi';
import { UserLocationContext } from './UserLocationContext';
import MapStyle from './MapStyle.json';

const Map = () => {
  const { mapRegion, setMapRegion } = useContext(UserLocationContext) || { mapRegion: { latitude: 0, longitude: 0, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }, setMapRegion: () => {} };
  console.log(mapRegion)
  const [placeList,setPlaceList]=useState([]);
  // const { location, setLocation } = useContext(UserLocationContext) || { location: { latitude: 0, longitude: 0 }, setLocation: () => {} };
  useEffect(()=>{mapRegion&&GetNearByPlace();},[mapRegion])
  const GetNearByPlace=()=>{
    const data = {
      "includedTypes": ["parking"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": mapRegion?.latitude,
            "longitude": mapRegion?.longitude},
          "radius": 5000.0
        }
      }
    }
    GlobalApi.NewNearByPlace(data).then((res: any)=>{console.log(res.data);
      setPlaceList(res.data?.places);
    })
    }

  
  return mapRegion?.latitude&&(
    <View>
      <View style={styles.headerContainer}>
        <SearchBar searchedLocation={(mapRegion: any) => console.log(mapRegion)} />
      </View>
      <MapView style={styles.map}
        region={mapRegion}
        customMapStyle={MapStyle}>
        <Marker coordinate={mapRegion} title="Location" description=""><Image source={require('../assets/icons/marker.png')}
          style={{ height: 50, width: 50 }}
        ></Image></Marker>
      </MapView>
      <View style={styles.placeListContainer}>
        {placeList&&<PlaceListview placeList={placeList}/>}
      </View>
      {/* <Button title="Get Location" onPress={userLocation} /> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    padding: 10,
    paddingTop: 0,
  },
  placeListContainer: {
    position: 'absolute',
    bottom: 110,
    zIndex: 10,
    width: '100%'
  }
});

function setErrorMsg(arg0: string) {
  throw new Error('Function not implemented.');
}

export default Map; 