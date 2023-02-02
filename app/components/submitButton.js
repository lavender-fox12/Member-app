import React from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from './customButton';
import { useFormikContext } from 'formik';

function SubmitButton({ text }) {
  const { handleSubmit } = useFormikContext();

  return (
    <CustomButton
      text={text}
      onPress={handleSubmit}
      type={'PRIMARY'}
      style={styles.button}
    />
  );
}

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
