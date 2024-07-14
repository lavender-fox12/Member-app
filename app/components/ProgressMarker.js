// ProgressDots.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressMarker = ({ currentIndex, totalDots }) => {
  return (
    <View style={styles.dotContainer}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: index === currentIndex ? 'blue' : 'lightgray' },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default ProgressMarker;
