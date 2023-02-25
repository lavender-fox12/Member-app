import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import Screen from '../components/Screen';
import SubmitButton from '../components/submitButton';
import CustomButton from '../components/customButton';
import TransparentButton from '../components/transparentButton';
import Icons from 'react-native-vector-icons/Octicons';

import * as Yup from 'yup';

function ChallengesScreen({navigation}) {
  const name = 'Sean Kim';
  const handleHomeIcon = () => {
      navigation.navigate("Dashboard");
  }
  const handleChallengesIcon = () => {
      navigation.navigate("Challenges");
  }
  const handleCalendarIcon = () => {
      navigation.navigate("Calendar");
  }
  const handleSocialIcon = () => {
      navigation.navigate("Socials")
  }
  return (
    <Screen>
      <View style={styles.profilePictureBorder}>
        <Image
          style={styles.profilePicture}
          source={require('../assets/tempProfilePhoto.png')}
        />
      </View>
      <Text style={styles.title}>Challenges</Text>
      <Text style={styles.name}>{name}</Text>
      <TransparentButton text ='Open Challenges' text2 ='Complete these challenges at any time!'/>
      {/* Should run backend code to switch to Open Challenges Page*/}
      <TransparentButton text = 'Level-Based Challenges' text2 = 'Complete these challenges at any time!'/>
      {/* Should run backend code to switch to Level Based Challenges Page*/}

      <View style={styles.navigationFooter}>
                <Icons onPress={handleHomeIcon} style={styles.icons} name="home" size={30} color={"#fff"}/>
                <Icons onPress={handleCalendarIcon}style={styles.icons} name="calendar" size={30} color={"#fff"}/>
                <Icons onPress={handleChallengesIcon} style={styles.icons} name="list-ordered" size={30} color={"#fff"}/>
                <Icons onPress={handleSocialIcon} style={styles.icons} name="people" size={30} color={"#fff"}/>
      </View>

    </Screen>
  );
}

export default ChallengesScreen;

const styles = StyleSheet.create({
  profilePictureBorder: {
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4881CB',
    justifyContent: 'center',
    overflow: 'hidden',
    right: 30,
    top: 30,
    position: 'absolute',
    width: 60,
    height: 60,
  },
  profilePicture: {
    maxHeight: 60,
    maxWidth: 60,
  },
  title: {
    color: 'white',
    fontSize: 25,
    paddingTop: 10,
    position: 'absolute',
    top: 50,
    left: 30,
  },
  name: {
    fontSize: 13,
    position: 'absolute',
    top: 25,
    left: 30,
    color: 'white',
    align: 'left',
    paddingVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginTop: '20',
  },
  text: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  navigationFooter: {
    flexDirection: 'row',
    margin: 20,
  },
  icons: {
      marginLeft: 20,
      marginRight: 20,
  }
});