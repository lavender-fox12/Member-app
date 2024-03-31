import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import TempProfilePhoto from '../assets/tempProfilePhoto.png';

import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';

import Screen from '../components/Screen';
import AppForm from '../components/AppForm';

function TechSupportScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Login');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot password');
  };

  const onCreateAccountPressed = () => {
    console.warn('Create new account');
  };

  return (
    <Screen>
      <View style={styles.root}>
        {/* <ImageBackground source={Background} resizeMode="cover" style={[styles.backgroundImage, {height: height}, {width: width}, styles.root]}> */}

        <Text style={styles.text}> Tech Support</Text>

        <View style={styles.profilePictureBorder}>
          <Image source={TempProfilePhoto} style={[styles.profilePicture]} />
        </View>
        <AppForm>
          <CustomInput
            placeholder="Name"
            value={email}
            setValue={setEmail}
            secureTextEntry={false}
          />

          <CustomInput
            placeholder="Email"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />

          <CustomInput
            placeholder="Phone Number"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />

          <CustomInput
            placeholder="Problem Description"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </AppForm>
        <Text style={styles.text}> {''} </Text>

        <CustomButton text="Submit" onPress={onSignInPressed} type="PRIMARY" />

        <Text style={styles.text}> {''} </Text>
        <Text style={styles.text}> {''} </Text>
        <Text style={styles.text}> {''} </Text>
        <Text style={styles.text}> {''} </Text>

        <Text style={styles.text2}>
          "**Please fill out the following contact form or send an email to
          info@steme.org and we'll get back to you as soon as possible** "
        </Text>

        <Text style={{ margin: 7 }} />
      </View>
    </Screen>
  );
}

export default TechSupportScreen;

const styles = StyleSheet.create({
  profilePictureBorder: {
    position: 'relative',
    marginTop: 3,
    marginBottom: 20,
    alignItems: 'center',
    // height: height * 0.095,
    // width: height * 0.095,
    // borderRadius: height * (0.095 / 2),
  },
});
