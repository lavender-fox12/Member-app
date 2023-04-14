import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import CustomButton from '../components/customButton';
import MenuButton from '../components/MenuButton';
import Screen from '../components/Screen';

function SettingsMenuScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.profilePictureBorder}>
        <Image
          style={styles.profilePicture}
          source={require('../assets/tempProfilePhoto.png')}
        />
      </View>
      <MenuButton
        onPress={() => navigation.navigate('Account')}
        icon={'account'}
        text="Account"
        color={'#fff'}
        size={30}
      />
      <MenuButton
        icon={'account-question-outline'}
        color={'#fff'}
        size={30}
        text="Tech Support"
      />
      <CustomButton
        text="Logout"
        onPress={() => console.log('')}
        type="LOGOUT"
      />
    </Screen>
  );
}
export default SettingsMenuScreen;

const styles = StyleSheet.create({
  profilePictureBorder: {
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4881CB',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 80,
    marginTop: 100,
  },
  profilePicture: {
    maxHeight: 120,
    maxWidth: 120,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
