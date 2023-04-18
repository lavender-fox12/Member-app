import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Badge(props) {
  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons name="medal" size={50} color={'gold'} />
      </View>
      <TouchableWithoutFeedback>
        <Text style={styles.text}>Mercury Badge</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Badge;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    marginLeft: 30,
  },
});
