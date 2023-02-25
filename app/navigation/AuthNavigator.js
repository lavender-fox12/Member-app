import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';
// TEMP NAVIGATION, semi can you change this so there's a navigator for after you're signed in. I'm not sure how that works. For now I will just navigate here
import CalendarScreen from '../screens/CalendarScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import SocialsScreen from '../screens/SocialsScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen}/>
      <Stack.Screen name="Challenges" component={ChallengesScreen}/>
      <Stack.Screen name="Calendar" component={CalendarScreen}/>
      <Stack.Screen name="Socials" component={SocialsScreen}/>
    </Stack.Navigator>
);

export default AuthNavigator;
