import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsNavigator from './SettingsNavigator';
import DashboardScreen from '../screens/DashboardScreen';
import BadgesScreen from '../screens/BadgesScreen';
import MercuryFront from '../screens/MercuryFront';
import MercuryBack from '../screens/MercuryBack';

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
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="MercuryFront"
      component={MercuryFront}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="MercuryBack"
      component={MercuryBack}
    />
  </Stack.Navigator>
);

export default DashboardNavigator;
