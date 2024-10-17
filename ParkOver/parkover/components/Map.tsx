import React,{useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Button, Text } from 'react-native';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SearchBar from '@/components/SearchBar';

const Maps =() =>  {
      const [mapRegion, setMapRegion] = useState({
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,        });
      
        const userLocation = async () => {
          let status = await Location.requestForegroundPermissionsAsync();
          if (status.status !== 'granted'){
            setErrorMsg('Permission to access location was denied');
          }
          let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
          setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
        }
        
        useEffect(() => {
          userLocation();
        }, []);
    return (
        <View>
        <View style={styles.headerContainer}>
          <SearchBar searchedLocation={(location: any)=>console.log(location)}/>
        </View>
        <MapView style={styles.map} 
        region = {mapRegion}>
          <Marker coordinate={mapRegion} title="Location" description=""/>
        </MapView>
        <Button title="Get Location" onPress={userLocation} />
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
    padding: 20,
    paddingTop: 40,
  }
});

function setErrorMsg(arg0: string) {
  throw new Error('Function not implemented.');
}

export default Maps; 