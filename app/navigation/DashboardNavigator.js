import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsNavigator from './SettingsNavigator';
import DashboardScreen from '../screens/DashboardScreen';
import BadgesScreen from '../screens/BadgesScreen';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Dashboard"
      component={DashboardScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      name="Settings"
      component={SettingsNavigator}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Badges"
      component={BadgesScreen}
    />
  </Stack.Navigator>
);

export default DashboardNavigator;
