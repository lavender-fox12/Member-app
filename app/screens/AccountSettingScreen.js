import React from 'react';

import { StyleSheet, Text } from 'react-native';

import AppImagePicker from '../components/AppImagePicker';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function AccountSettingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppImagePicker style={styles.image}>
        <Text style={styles.text}>Profile Picture</Text>{' '}
      </AppImagePicker>
      <Text>Please</Text>
      <Text>Please</Text>
    </Screen>
  );
}

export default AccountSettingScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  screen: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
