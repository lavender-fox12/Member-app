import React from 'react';
import { Text } from 'react-native';

import { StyleSheet } from 'react-native';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
}

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
