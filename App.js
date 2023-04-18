import React from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Badge from './app/components/Badge';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <Badge />
    </Screen>
  );
}
