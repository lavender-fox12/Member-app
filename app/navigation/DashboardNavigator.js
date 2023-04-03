import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import SettingsMenuScreen from '../screens/SettingsMenuScreen';

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
        headerShown: true,
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      name="Settings"
      component={SettingsMenuScreen}
    />
  </Stack.Navigator>
);

export default DashboardNavigator;
