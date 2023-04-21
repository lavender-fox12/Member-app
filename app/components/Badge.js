import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Badge({ badge, color, completed }) {
  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons name="medal" size={55} color={color} />
        {!completed && (
          <View style={styles.lock}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="lock-outline"
              size={30}
              color={'red'}
            />
          </View>
        )}
      </View>
      <TouchableWithoutFeedback>
        {completed ? (
          <Text style={styles.completeBadgeText}>{badge}</Text>
        ) : (
          <Text style={styles.incompleteBadgeText}>{badge}</Text>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Badge;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 15,
  },
  lock: {
    backgroundColor: '#2A242B',
    borderRadius: 20,
    display: 'flex',
    height: 40,
    left: 9,
    position: 'absolute',
    top: 19,
    width: 40,
  },
  icon: {
    alignSelf: 'center',
    paddingTop: 5,
  },
  completeBadgeText: {
    color: 'white',
    fontSize: 26,
    marginLeft: 30,
  },
  incompleteBadgeText: {
    color: '#444',
    fontSize: 26,
    marginLeft: 30,
  },
});
