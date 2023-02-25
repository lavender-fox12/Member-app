import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

function SocialsScreen({}) {
  return (
    <Screen>
      <Text style={styles.text}> {'Socials Screen'} </Text>
    </Screen>
  );
}

export default SocialsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30, // should be 14
    color: 'white',
    marginTop: -4,
    marginBottom: 10,
    marginRight: 'auto',
  },
});
