import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import Screen from '../components/Screen';

function CalendarScreen({ navigation }) {
  return (
    <Screen>
      <Text style={styles.text}> {'Calendar Screen'} </Text>
    </Screen>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  // Change this to normal after
  text: {
    fontSize: 200, // should be 14
    color: 'white',
    marginTop: -4,
    marginBottom: 10,
    marginRight: 'auto',
  },
});
