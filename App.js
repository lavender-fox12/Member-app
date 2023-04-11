import React from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import FormPicker from './app/components/AppFormPicker';
import countries from './app/components/countries';
import AppForm from './app/components/AppForm';
import Screen from './app/components/Screen';
import EditProfileScreen from './app/screens/EditProfileScreen';

export default function App() {
  return <EditProfileScreen />;
}
