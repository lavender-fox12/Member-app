import React from 'react';
import { Text, StyleSheet, Linking} from 'react-native';
import Screen from '../components/Screen';
import CustomButton from '../components/customButton';


function SocialsScreen({}) {
  return (
    <Screen>
      <CustomButton text="STEM·E WEBSITE" 
      onPress={() => Linking.openURL('https://www.steme.org/')}
      type="PRIMARY"
      />
      <CustomButton text="Academic Journal" 
      onPress={() => Linking.openURL('https://www.aj-stem.com/')}
      type="PRIMARY"
      />
      <CustomButton text="Donate!" 
      onPress={() => Linking.openURL('https://www.steme.org/funding')}
      type="PRIMARY"
      />
      <CustomButton text="Become a Tutor!" 
      onPress={() => Linking.openURL('https://www.steme.org/tutoring')}
      type="PRIMARY"
      />
      <CustomButton text="Become a Mentor!" 
      onPress={() => Linking.openURL('https://www.steme.org/mentor')}
      type="PRIMARY"
      />
    </Screen>
  );
}

export default SocialsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14, // should be 14
    color: 'white',
    marginTop: -4,
    marginBottom: 10,
    marginRight: 'auto',
  },
});
