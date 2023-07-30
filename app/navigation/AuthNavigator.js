import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AppNavigator from './AppNavigator';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Tab = createMaterialTopTabNavigator();

const AuthNavigator = () => (
  <Tab.Navigator
    screenOptions={{ animation: 'slide_from_left', tabBarStyle: { display: 'none' }, swipeEnabled: false }}
    initialRouteName="SignIn"
  >
    <Tab.Screen name="SignIn" component={SignInScreen} />
    <Tab.Screen name="SignUp" component={SignUpScreen} />
    <Tab.Screen name="AppNavigator" component={AppNavigator} />
  </Tab.Navigator>
);

export default AuthNavigator;
