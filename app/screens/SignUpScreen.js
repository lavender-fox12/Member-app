import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import CustomButton from '../components/customButton';
import Logo from '../assets/stemeLogo.png';
import Screen from '../components/Screen';
import SubmitButton from '../components/submitButton';
import { auth, db } from '../navigation/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

function SignUpScreen({ navigation }) {
  const writeUserData = function (userUID, username, email, imageUrl) {
    const reference = ref(db, 'users/' + userUID);

    set(reference, {
      username: username,
      email: email,
      profile_picture: imageUrl,
    });
  };
  const handleSignUp = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Registering a user to the database
      writeUserData(user.uid, 'N/A', email, '#');
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
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          onSubmit={({ email, password }) => handleSignUp(email, password)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            style={styles.textBox}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            style={styles.textBox}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="confirmPassword"
            placeholder="Re-type Password"
            secureTextEntry
            textContentType="password"
            style={styles.textBox}
          />
          <SubmitButton text={'SIGN UP'} />
        </AppForm>
        <CustomButton
          style={styles.createAccount}
          text={'Have an account? Log in '}
          type="TERTIARY"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </Screen>
  );
}

export default SignUpScreen;

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
  textBox: {
    width: "100%"
  }
});
