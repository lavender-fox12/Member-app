import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from "./app/screens/DashboardScreen";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
