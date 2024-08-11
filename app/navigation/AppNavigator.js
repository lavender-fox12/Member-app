import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Octicons';

import CalendarStack from './CalendarStack';

import ChallengesNavigator from '../navigation/ChallengesNavigator';
import DashboardNavigator from './DashboardNavigator';
import SocialsScreen from '../screens/SocialsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        elevation: 0,
        position: 'absolute',
      },
    }}
  >
    <Tab.Screen
      name="DashboardNavigator"
      component={DashboardNavigator}
      options={{
        tabBarIcon: ({ size }) => (
          <Icons name="home" size={size} color={'#fff'} />
        ),
        title: '',
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={CalendarStack}
      options={{
        tabBarIcon: ({ size }) => (
          <Icons name="calendar" size={size} color={'#fff'} />
        ),
        title: '',
      }}
    />
    <Tab.Screen
      name="Challenges"
      component={ChallengesNavigator}
      options={{
        tabBarIcon: ({ size }) => (
          <Icons name="list-ordered" size={size} color={'#fff'} />
        ),
        title: '',
      }}
    />
    <Tab.Screen
      name="Socials"
      component={SocialsScreen}
      options={{
        tabBarIcon: ({ size }) => (
          <Icons name="people" size={size} color={'#fff'} />
        ),
        title: '',
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
