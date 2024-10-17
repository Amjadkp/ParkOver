import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  searchedLocation: (location: { lat: number; lng: number } | undefined) => void;
}

export default function SearchBar({ searchedLocation }: SearchBarProps) {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
      paddingHorizontal: 5,
      backgroundColor: Colors.WHITE,
      borderRadius: 6
    }}>
      <Ionicons name="location-sharp" size={24} color={Colors.BLACK} style={{paddingTop:10}}/>
    <GooglePlacesAutocomplete
      placeholder='Search'
      enablePoweredByContainer={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        console.log(data, details);
        searchedLocation(details?.geometry?.location);
      }}  
      query={{
        key: 'API_KEY',
        language: 'en',
      }}
    />
    </View>
  )
}