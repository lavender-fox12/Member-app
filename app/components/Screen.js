import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

function Screen({ children }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
