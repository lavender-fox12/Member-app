import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Screen from '../components/Screen';

const EventFormScreen = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventPoint, setEventPoint] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    let errors = {};

    if (!eventName) errors.eventName = 'Event name is required';
    if (!eventDate) errors.eventDate = 'Event date is required';
    if (!eventTime) errors.eventTime = 'Event time is required';
    if (!eventLocation) errors.eventLocation = 'Event location is required';
    if (!eventPoint) errors.eventPoint = 'Event point is required';
    if (!eventDescription) errors.eventDescription = 'Event description is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      console.log('Event Created:', { eventName, eventDate, eventTime, eventPoint, eventLocation });
      navigation.navigate('QRCode', { data: `${eventPoint}` })
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Create New Event</Text>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Event Name:</Text>
            <TextInput
              style={styles.input}
              value={eventName}
              onChangeText={setEventName}
              placeholder="Enter event name"
              placeholderTextColor="#888"
            />
            {errors.eventName && <Text style={styles.errorText}>{errors.eventName}</Text>}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Event Date:</Text>
            <TextInput
              style={styles.input}
              value={eventDate}
              onChangeText={setEventDate}
              placeholder="Enter event date (e.g., 2024-08-03)"
              placeholderTextColor="#888"
            />
            {errors.eventDate && <Text style={styles.errorText}>{errors.eventDate}</Text>}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Event Time:</Text>
            <TextInput
              style={styles.input}
              value={eventTime}
              onChangeText={setEventTime}
              placeholder="Enter event time (e.g., 14:00)"
              placeholderTextColor="#888"
            />
            {errors.eventTime && <Text style={styles.errorText}>{errors.eventTime}</Text>}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Event Location:</Text>
            <TextInput
              style={styles.input}
              value={eventLocation}
              onChangeText={setEventLocation}
              placeholder="Enter event location"
              placeholderTextColor="#888"
            />
            {errors.eventLocation && <Text style={styles.errorText}>{errors.eventLocation}</Text>}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Event Point:</Text>
            <TextInput
              style={styles.input}
              value={eventPoint}
              onChangeText={setEventPoint}
              placeholder="Enter event point (e.g., 35)"
              placeholderTextColor="#888"
            />
            {errors.eventPoint && <Text style={styles.errorText}>{errors.eventPoint}</Text>}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Description:</Text>
            <TextInput
              style={styles.input}
              value={eventDescription}
              onChangeText={setEventDescription}
              placeholder="Enter event description"
              placeholderTextColor="#888"
            />
            {errors.eventDescription && <Text style={styles.errorText}>{errors.eventDescription}</Text>}
          </View>
          <View style={styles.submitEventContainer}>
              <TouchableOpacity style={styles.submitEventButton} onPress={() => handleSubmit()}>
                  <Text style={styles.submitEventText}>Create Event</Text>
              </TouchableOpacity>
          </View>
          <View style={{ paddingBottom: 80 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "white",
  },

  formGroup: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: "white",
  },

  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  submitEventContainer: {
    marginTop: 5,
    alignItems: 'center', 
  },

  submitEventButton: {
    backgroundColor: "#8468BB",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  submitEventText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },

});

export default EventFormScreen;