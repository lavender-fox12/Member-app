import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import AppImagePicker from '../components/AppImagePicker';
import MenuButton from '../components/MenuButton';
import Screen from '../components/Screen';

function AccountSettingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppImagePicker width={200} height={200}>
        <Text>Please</Text>
      </AppImagePicker>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>Full Name</Text>
        <Text style={styles.text}>Email address</Text>
      </View>
      <MenuButton
        text={'Reset Password'}
        type={'SECONDARY'}
        style={styles.button}
      />
      <MenuButton
        text={'Edit Profile'}
        type={'SECONDARY'}
        style={styles.button}
      />
      <MenuButton
        text={'Delete Account'}
        type={'SECONDARY'}
        style={[{ backgroundColor: '#d40f0f', fontSize: 20 }, styles.button]}
      />
    </Screen>
  );
}

export default AccountSettingScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
  button: {
    fontSize: 20,
    marginVertical: 10,
    padding: 20,
  },
});
