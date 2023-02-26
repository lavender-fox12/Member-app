import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children, style }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={[styles.background, style]}
      source={require('../assets/stemeBackgroundImage.png')}
    >
      {children}
    </ImageBackground>
  );
}

export default Screen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 15,
    paddingTop: Constants.statusBarHeight,
  },
});
