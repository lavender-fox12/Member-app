import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import ChallengesScreen from "./app/screens/ChallengesScreen"
import { NavigationContainer } from '@react-navigation/native';
import EmailVerificationScreen from "./app/screens/EmailVerificationScreen"

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
