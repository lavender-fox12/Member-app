import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import CustomButton from '../components/customButton';
import Logo from '../assets/stemeLogo.png';
import Screen from '../components/Screen';
import SubmitButton from '../components/submitButton';
import { auth } from '../navigation/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function SignInScreen({ navigation }) { 
  const [user, setUser] = useState({});
  const [savedEmail, setSavedEmail] = useState('');

  useEffect(() => {
    
    const loadSavedEmail = async () => {
      try {
        const email = await AsyncStorage.getItem('savedEmail');
        if (email !== null) {
          setSavedEmail(email); 
        }
      } catch (error) {
        console.log('Failed to load email:', error);
      }
    };
    loadSavedEmail();
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate('AppNavigator');
    }
  });

  const handleSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      
      await AsyncStorage.setItem('savedEmail', email);
      Alert.alert('Success', 'Email saved successfully');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.container}>
        <AppForm
          initialValues={{ email: savedEmail, password: '' }} // Pre-fill the email field with saved email
          onSubmit={({ email, password }) => handleSignIn(email, password)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            width='100%'
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            width='100%'
          />
          <SubmitButton text={'LOGIN'} />
        </AppForm>
        <CustomButton text={'Forgot your password?'} type="TERTIARY" />
        <CustomButton
          style={styles.createAccount}
          text={"Don't have an account? Create one "}
          type="TERTIARY"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </Screen>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
  },
  logo: {
    height: 180,
    borderRadius: 90,
    width: 180,
    marginTop: 50,
    marginBottom: 20,
  },
  createAccount: {
    position: 'absolute',
    bottom: '-20%',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
