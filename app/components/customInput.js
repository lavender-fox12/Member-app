import { useFormikContext } from 'formik';
import React from 'react';
import { View, Text, TextInput, StyleSheet, useState } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  const [height, setHeight] = React.useState(30);

  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161B45',
    width: '100%',

    borderColor: '#979797',
    borderWidth: 0,

    paddingHorizontal: 10,
    padding: 13,
    marginVertical: 1,
  },
  input: {
    width: '100%',
    allowFontScaling: false,
    height: 20,
    color: '#FFFFFF',
  },
});
export default CustomInput;
