import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color: 'grey',
  },
});
