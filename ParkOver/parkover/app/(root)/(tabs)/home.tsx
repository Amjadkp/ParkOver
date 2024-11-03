import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'
import Map from '../../../components/Map' 
import { useContext, useEffect, useState } from 'react'
import GlobalApi from '../../../components/GlobalApi'
import { UserLocationContext } from '../../../components/UserLocationContext'
import React from 'react'
import BookingScreen from '@/components/BookingScreen'

export default function Page() {
  const { user } = useUser()
  
  return (
    <View>
      <SignedIn>
      <UserLocationContext.Provider value={{location,setLocation}}>
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
        
    </View>
  )
}