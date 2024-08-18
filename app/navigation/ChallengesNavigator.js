import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChallengesScreen from '../screens/ChallengesScreen';
import OpenChallengesScreen from '../screens/OpenChallengesScreen';
import LevelBasedChallengesScreen from '../screens/LevelBasedChallenges';
import QRCodeScanner from '../components/QRScanner';
const Stack = createNativeStackNavigator();

const ChallengesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      name="Challenges"
      component={ChallengesScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      name="Open Challenges"
      component={OpenChallengesScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      name="Level Based Challenges"
      component={LevelBasedChallengesScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      name="QR Code Scanner"
      component={QRCodeScanner}
    />
  </Stack.Navigator>
);

export default ChallengesNavigator;