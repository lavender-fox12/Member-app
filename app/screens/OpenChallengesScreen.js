import React, {useState, useCallback, useMemo, setState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ImageBackground, Pressable} from 'react-native';
import Screen from '../components/Screen';
import TempProfilePhoto from '../assets/tempProfilePhoto.png';
import Check from '../assets/check.png';

function OpenChallengesScreen ({navigation}) { 
    const {height, width} = useWindowDimensions();
  
    const onChallengePressed = () => {
      console.warn("Challenge pressed");
    }
    
  
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        <Screen style={styles.screen}>
          <View style={[{position: 'absolute'}, {marginTop: 21}, {marginRight: 23}, {right: 0}, {height: height*0.075}, {width: height*0.075}, {borderRadius: height * (0.095/2)}, styles.profilePictureBorder]}>
            <Image source = {TempProfilePhoto} style ={[styles.profilePicture, {height: height * 0.062}, {width: height * 0.062}, {borderRadius: height*0.045}]}/>   
          </View>
          
          <ScrollView style={[styles.challengesScroll, {width: width}]}>
            <View style={styles.challengeContainer}>
              <Pressable onPress={onChallengePressed} style={[styles.challengeNameContainer, {width: width * 0.68}]}>
                <Text style={styles.challengeText}>{"Challenge Name #1"}</Text>
              </Pressable>
              <View style={[{backgroundColor: 'rgba(135, 121, 164, 0.5)'}, {height: 50}, {width: 50}, {borderRadius: 25}, {marginLeft: "auto"}, {marginRight: 20}, {alignItems: "center"}, {justifyContent: "center"}, {overflow: 'visible'}]}>
                <Text style={styles.challengeText}>{"+10"}</Text>
                <Image source={Check} style={styles.challengeCheck}/>
              </View>
            </View>
  
            <View style={styles.challengeContainer}>
              <Pressable onPress={onChallengePressed} style={[styles.challengeNameContainer, {width: width * 0.68}]}>
                <Text style={styles.challengeText}>{"Challenge Name #2"}</Text>
              </Pressable>
              <View style={[{backgroundColor: 'rgba(135, 121, 164, 0.5)'}, {height: 50}, {width: 50}, {borderRadius: 25}, {marginLeft: "auto"}, {marginRight: 20}, {alignItems: "center"}, {justifyContent: "center"}, {overflow: 'visible'}]}>
                <Text style={styles.challengeText}>{"+10"}</Text>
                <Image source={Check} style={styles.challengeCheck}/>
              </View>
            </View>
  
            <View style={styles.challengeContainer}>
              <Pressable onPress={onChallengePressed} style={[styles.challengeNameContainer, {width: width * 0.68}]}>
                <Text style={styles.challengeText}>{"Challenge Name #3"}</Text>
              </Pressable>
              <View style={[{backgroundColor: 'rgba(135, 121, 164, 0.5)'}, {height: 50}, {width: 50}, {borderRadius: 25}, {marginLeft: "auto"}, {marginRight: 20}, {alignItems: "center"}, {justifyContent: "center"}, {overflow: 'visible'}]}>
                <Text style={styles.challengeText}>{"+10"}</Text>
                <Image source={Check} style={styles.challengeCheck}/>
              </View>
            </View>
          </ScrollView>
  
        </Screen>
      </ScrollView>
    );
  };
  //<ImageBackground source={Background} resizeMode="cover" style={[styles.image, {height: height}, {width: width}]}>
  
  const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      margin: 20,
    },
    screen: {
        paddingTop: 120,
        alignItems: 'center'
    },
    profilePictureBorder: {
      borderWidth: 3, 
      borderColor: '#4881CB',
      justifyContent: 'center',
      alignItems: 'center'
    },
    profilePicture: {
      maxHeight: 100,
      maxWidth: 100,
    },
    text: {
      fontSize: 14,
      color: 'white',
      marginTop: 7,
      marginBottom: 10,
      marginRight: 'auto'
    },
    challengesScroll: {
      marginTop: 5
    },
    challengeContainer: {
      height: 70,
      borderRadius: 10,
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
    },
    challengeNameContainer: {
      backgroundColor: 'rgba(135, 121, 164, 0.3)',
      marginLeft: 20,
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    challengeText: {
      fontSize: 18,
      fontWeight: "bold",
      color: 'rgba(255, 255, 255, 1)',
      marginBottom: 1,
      position: "absolute"
    },
    challengeCheck: {
      marginRight: "auto",
      marginBottom: "auto",
      marginLeft: -10,
      marginTop: -10
    }
  })
export default OpenChallengesScreen;