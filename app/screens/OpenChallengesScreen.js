import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import Screen from '../components/Screen';

import Check from '../assets/check.png';

function OpenChallengesScreen({ navigation }) {
  const { height, width } = useWindowDimensions();

  const onChallengePressed = () => {
    console.log('Challenge pressed');
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.profilePictureBorder}>
        <Image
          style={styles.profilePicture}
          source={require('../assets/tempProfilePhoto.png')}
        />
      </View>
      <ScrollView style={[styles.challengesScroll, { width: width }]}>
        <View style={styles.challengeContainer}>
          <Pressable
            onPress={onChallengePressed}
            style={[styles.challengeNameContainer, { width: width * 0.68 }]}
          >
            <Text style={styles.challengeText}>{'Challenge Name #1'}</Text>
          </Pressable>
          <View style={styles.checkContainer}>
            <Text style={styles.challengeText}>{'+10'}</Text>
            <Image source={Check} style={styles.challengeCheck} />
          </View>
        </View>

        <View style={styles.challengeContainer}>
          <Pressable
            onPress={onChallengePressed}
            style={[styles.challengeNameContainer, { width: width * 0.68 }]}
          >
            <Text style={styles.challengeText}>{'Challenge Name #2'}</Text>
          </Pressable>
          <View style={styles.checkContainer}>
            <Text style={styles.challengeText}>{'+10'}</Text>
            <Image source={Check} style={styles.challengeCheck} />
          </View>
        </View>

        <View style={styles.challengeContainer}>
          <Pressable
            onPress={onChallengePressed}
            style={[styles.challengeNameContainer, { width: width * 0.68 }]}
          >
            <Text style={styles.challengeText}>{'Challenge Name #3'}</Text>
          </Pressable>
          <View style={styles.checkContainer}>
            <Text style={styles.challengeText}>{'+10'}</Text>
            <Image source={Check} style={styles.challengeCheck} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    margin: 20,
  },
  screen: {
    paddingTop: 120,
    alignItems: 'center',
  },

  text: {
    fontSize: 14,
    color: 'white',
    marginTop: 7,
    marginBottom: 10,
    marginRight: 'auto',
  },
  challengesScroll: {
    marginTop: 5,
  },
  challengeContainer: {
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  challengeNameContainer: {
    backgroundColor: 'rgba(135, 121, 164, 0.3)',
    marginLeft: 20,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  challengeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 1,
    position: 'absolute',
  },
  challengeCheck: {
    marginRight: 'auto',
    marginBottom: 'auto',
    marginLeft: -10,
    marginTop: -10,
  },
  checkContainer: {
    backgroundColor: 'rgba(135, 121, 164, 0.5)',
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 'auto',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
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
});
export default OpenChallengesScreen;
