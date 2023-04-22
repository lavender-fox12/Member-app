import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PasswordResetScreen from "../screens/PasswordResetScreen";
import AccountSettingScreen from "../screens/AccountSettingScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
      name="Account"
      component={AccountSettingScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
      name="PasswordReset"
      component={PasswordResetScreen}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
