import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'
import Map from '../../../components/Map'
import { useEffect, useState } from 'react'
import GlobalApi from '../../../components/GlobalApi'
import { UserLocationContext } from '../../../components/UserLocationContext'
import React from 'react'
import BookingScreen from '@/components/BookingScreen'
import * as Location from 'expo-location';

export default function Page() {
  const { user } = useUser()

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let status = await Location.requestForegroundPermissionsAsync();
    if (status.status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
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
      <SignedIn>
        <UserLocationContext.Provider value={{ mapRegion, setMapRegion }}>
          <Map />
        </UserLocationContext.Provider>
      </SignedIn>

      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>

    </View >
  )
}

function setErrorMsg(arg0: string) {
  throw new Error('Function not implemented.')
}
