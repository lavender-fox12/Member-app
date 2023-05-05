import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChallengesScreen from '../screens/ChallengesScreen';
import OpenChallengesScreen from '../screens/OpenChallengesScreen';

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
  </Stack.Navigator>
);

export default ChallengesNavigator;