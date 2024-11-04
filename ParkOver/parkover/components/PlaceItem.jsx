import { View, Text,Image, Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GlobalApi from './GlobalApi';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function PlaceItem({place}) {
    const PLACE_PHOTO_URL = 'https://places.googleapis.com/v1/' 
  return (
    <View style={{
        backgroundColor: 'white',
        margin:5,
        borderRadius:10,
        width:Dimensions.get('screen').width*0.9,
        height:"90%"}}>
            <LinearGradient
        // Background Linear Gradient
        colors={['transparent',"#ffffff","#ffffff"]}
      >
      <Image source={place?.photos? {uri:PLACE_PHOTO_URL+place.photos[0]?.name+"/media?key="+GlobalApi.API_KEY+"&maxHeightPx=800&maxWidthPx=1200"}
       :require("./../assets/images/intro.png")}
      style={{width:'100%',borderRadius:10,height:120,zIndex:-1}}/>
      <View style={{padding:15}}>
      <Text style={{fontSize:20,}}>{place.displayName.text}</Text>
      <Text style={{fontSize:15, color:Colors.GRAY}}>{place.shortFormattedAddress}</Text>
      </View>
      <View style={{padding:12, backgroundColor:Colors.PRIMARY, borderRadius:6, paddingHorizontal:14}}>
        <FontAwesome name='location-arrow' size={25} color="white"/>
      </View>
      </LinearGradient>
    </View>
  )
}