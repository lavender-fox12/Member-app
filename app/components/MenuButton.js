import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function MenuButton({ color, icon, onPress, size, style, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={size} color={color} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(135, 121, 164, 0.3)',
    borderRadius: 10,
    flexDirection: 'row',
    fontSize: 14,
    marginVertical: 10,
    padding: 15,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
