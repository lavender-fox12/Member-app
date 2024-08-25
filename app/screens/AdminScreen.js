import React, {useState, useCallback, useMemo, setState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import {Calendar, CalendarUtils, CalendarList, CalendarProvider, LocaleConfig} from 'react-native-calendars';
import Screen from '../components/Screen';
import TempProfilePhoto from '../assets/tempProfilePhoto.png';



function AdminScreen (props) {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.testText}>{"This is the admin only page"}</Text>
    </Screen>
  );
};
//<ImageBackground source={Background} resizeMode="cover" style={[styles.image, {height: height}, {width: width}]}>
const styles = StyleSheet.create({
  testText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
export default AdminScreen;