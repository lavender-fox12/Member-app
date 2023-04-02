import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsMenuScreen from "../screens/SettingsMenuScreen";

const Stack = createNativeStackNavigator();

const DashboardNavigator = (props) => {
  <Stack.Navigator>
     <Stack.Screen name="SettingsMenu" component={SettingsMenuScreen} />
  </Stack.Navigator>
}

export default DashboardNavigator;