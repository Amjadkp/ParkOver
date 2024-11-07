import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function FormScreen({ closeModal }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const fakeUserId = 'John Doe'; // Fake user ID for QR code

  const handleSubmit = () => {
    setShowQRCode(true);
    setTimerStarted(true); // Start the timer when QR code is shown
  };

  useEffect(() => {
    let timer;
    if (timerStarted) {
      timer = setTimeout(() => {
        Alert.alert("Success", "Your car is in good hands.");
        setTimerStarted(false); // Reset the timer
      }, 15000); // 15 seconds
    }
    return () => clearTimeout(timer); // Cleanup timer when component unmounts or QR is hidden
  }, [timerStarted]);

  return (
    <View>
      {!showQRCode ? (
        <>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text style={styles.label}>Car Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your car number"
            value={carNumber}
            onChangeText={setCarNumber}
          />
          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Cancel" onPress={closeModal} color="red" />
        </>
      ) : (
        <View style={styles.qrContainer}>
          <Text style={styles.qrText}>Scan this QR Code</Text>
          <QRCode
            value={`Phone: ${phoneNumber}\nUserID: ${fakeUserId}\nCar: ${carNumber}`}
            size={200}
          />
          <Button title="Close" onPress={closeModal} color="red" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    label: {
      fontSize: 18, // Increased font size for better readability
      marginBottom: 10, // Increased spacing for better separation
      color: '#333', // Darker color for contrast
      fontWeight: '600', // Slightly bolder font for emphasis
    },
    input: {
      borderWidth: 1,
      borderColor: '#007BFF', // Changed to a more vibrant color for visibility
      padding: 12, // Increased padding for a more comfortable touch target
      marginBottom: 20,
      borderRadius: 8, // Slightly larger border radius for a modern look
      backgroundColor: '#F9F9F9', // Light background color for better contrast
      fontSize: 16, // Ensured consistent font size within the input
    },
    qrContainer: {
      alignItems: 'center',
      padding: 30, // Increased padding for a more spacious layout
      backgroundColor: '#EAEAEA', // Added background color to distinguish the section
      borderRadius: 10, // Rounded corners for a softer appearance
      shadowColor: '#000', // Added shadow for depth
      shadowOffset: { width: 0, height: 2 }, // Shadow offset for elevation effect
      shadowOpacity: 0.2, // Subtle shadow opacity
      shadowRadius: 4, // Soft shadow radius
      elevation: 5, // Android elevation for shadow effect
    },
    qrText: {
      fontSize: 20, // Increased font size for better visibility
      marginBottom: 20,
      color: '#555', // Softer text color for readability against the background
      textAlign: 'center', // Centered text alignment for aesthetics
    },
  });