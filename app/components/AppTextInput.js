import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

function AppTextInput({ ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={'grey'}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161B45',
    borderColor: '#979797',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  input: {
    color: '#FFFFFF',
    width: '100%',
  },
});
