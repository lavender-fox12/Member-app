import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screens/CalendarScreen';
import EventFormScreen from '../screens/EventFormScreen';
import QRCode from '../components/QRCode';

const Stack = createStackNavigator();

const CalendarStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Calendar" component={CalendarScreen} />
    <Stack.Screen name="EventFormScreen" component={EventFormScreen} />
    <Stack.Screen name="QRCode" component={QRCode} />
  </Stack.Navigator>
);

export default CalendarStack;