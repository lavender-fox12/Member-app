import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants';

function Screen({ children, style }) {
  return (
    <LinearGradient
        colors={['rgba(35,25,35,1)', 'rgba(5,13,65,1)', 'rgba(112,54,148,1)']}
        locations={[0, 0.6, 0.9]}
        start={{x: 2.32, y: 0}}
        end={{x: 0, y: 1.0}}
        style={{flex: 1}}>
      <View style={[styles.background, style]}>
        {children}
      </View>
    </LinearGradient>
  );
}

export default Screen;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
    padding: 15,
  },
});
