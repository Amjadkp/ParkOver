import React from 'react';
import { Marker } from 'react-native-maps';

export default function Markers({ place }) { // Properly destructure the place prop
    console.log(JSON.stringify(place)); // Check if latitude and longitude exist
    return place && place.location && ( // Check that place and place.location exist
        <Marker 
            coordinate={{
                latitude: place.location.latitude,
                longitude: place.location.longitude
            }}
            title={place.displayName ? place.displayName.text : "Unnamed Place"} // Optionally add a title
        />
    );
}
