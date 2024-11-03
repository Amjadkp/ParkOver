import React, { useState } from 'react'; 
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'; 
 
const BookingScreen = () => { 
  const [location, setLocation] = useState(''); 
  const [date, setDate] = useState(''); 
  const [time, setTime] = useState(''); 
 
  const handleBooking = () => { 
    // Implement booking logic, e.g., save to database 
    alert(`Booking confirmed at ${location} on ${date} at ${time}`); 
  }; 
 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>Book Valet Parking</Text> 
      <TextInput 
        style={styles.input} 
        placeholder="Location" 
        value={location} 
        onChangeText={setLocation} 
      /> 
      <TextInput 
        style={styles.input} 
        placeholder="Date (YYYY-MM-DD)" 
        value={date} 
        onChangeText={setDate} 
      /> 
      <TextInput 
        style={styles.input} 
        placeholder="Time (HH:MM)" 
        value={time} 
        onChangeText={setTime} 
      /> 
      <Button title="Book Now" onPress={handleBooking} /> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    padding: 20, 
  }, 
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  }, 
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20, 
    padding: 10, 
  }, 
}); 
 
export default BookingScreen; 