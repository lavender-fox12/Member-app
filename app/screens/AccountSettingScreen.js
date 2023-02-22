import React from 'react';

import { StyleSheet } from 'react-native';

import AppImagePicker from '../components/AppImagePicker';

function AccountSettingScreen(props) {
  return <AppImagePicker style={styles.image} />;
}

export default AccountSettingScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
