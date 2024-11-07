import { View, Text, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GlobalApi from './GlobalApi';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import FormScreen from './FormScreen';

export default function PlaceItem({ place }) {
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility
  const PLACE_PHOTO_URL = 'https://places.googleapis.com/v1/';

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={{
      backgroundColor: 'white',
      margin: 5,
      borderRadius: 10,
      width: Dimensions.get('screen').width * 0.9,
      height: 200,
      overflow: 'hidden'
    }}>
      <LinearGradient colors={['transparent', "#ffffff", "#ffffff"]} style={{ position: 'relative' }}>
        <Image source={place?.photos ? { uri: PLACE_PHOTO_URL + place.photos[0]?.name + "/media?key=" + GlobalApi.API_KEY + "&maxHeightPx=800&maxWidthPx=1200" }
          : require("./../assets/images/intro.png")}
          style={{ width: '100%', borderRadius: 10, height: 120, zIndex: -1 }} />

        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 20 }}>{place.displayName.text}</Text>
          <Text style={{ fontSize: 15, color: Colors.GRAY }} numberOfLines={1} ellipsizeMode='tail'>
            {place.shortFormattedAddress}
          </Text>
          </View>

        <TouchableOpacity
          onPress={openModal}
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 6,
            padding: 8,
            paddingTop: 20,
            paddingLeft: 12, // Add padding to the left for extra space
          }}
          >
          <FontAwesome name='location-arrow' size={25} color="green" />
        </TouchableOpacity>

      </LinearGradient>

      {/* Modal to display form */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <View style={{
            width: '80%',
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
            <FormScreen closeModal={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
