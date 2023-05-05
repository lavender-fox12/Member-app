import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Screen from '../components/Screen';
import TransparentButton from '../components/transparentButton';

function ChallengesScreen({ navigation }) {
  const name = 'Sean Kim';

  return (
    <Screen style={styles.screen}>
      <View style={styles.profilePictureBorder}>
        <Image
          style={styles.profilePicture}
          source={require('../assets/tempProfilePhoto.png')}
        />
      </View>
      <Text style={styles.title}>Challenges</Text>
      <Text style={styles.name}>{name}</Text>
      <TransparentButton
        text="Open Challenges"
        text2="Complete these challenges at any time!"
      />
      {/* Should run backend code to switch to Open Challenges Page*/}
      <TransparentButton
        text="Level-Based Challenges"
        text2="Complete these challenges at any time!"
      />
      {/* Should run backend code to switch to Level Based Challenges Page*/}
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
  screen: {
    paddingTop: 120,
  },
});
