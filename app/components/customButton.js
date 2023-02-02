import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`], style]}
    >
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 15,
    width: '100%',
  },
  container_PRIMARY: {
    backgroundColor: '#9F65D9',
    fontSize: 16,
  },
  container_SECONDARY: {
    fontSize: 14,
    backgroundColor: 'rgba(135, 121, 164, 0.3)',
    marginVertical: 5,
  },
  container_TERTIARY: {
    fontSize: 9,
  },
  container_LOGOUT: {
    backgroundColor: '#9F65D9',
    fontSize: 16,
  },
  text: {
    color: 'white',
  },
});

export default CustomButton;
