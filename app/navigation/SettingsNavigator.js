import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountNavigator from '../navigation/AccountNavigator';
import SettingsMenuScreen from '../screens/SettingsMenuScreen';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator>
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
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Account"
      component={AccountNavigator}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
