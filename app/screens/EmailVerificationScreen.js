import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import Screen from '../components/Screen';
import SubmitButton from '../components/submitButton';
import CustomButton from '../components/customButton';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  verificationCode: Yup.string()
    .required('Please enter the six digit code')
    .min(6, 'Please enter the six digit code')
    .label('Code'),
});

function EmailVerificationScreen(props) {
  const email = 'temp@temp.com';
  const verifyMessage =
    'We’ve sent an email to ' +
    email +
    ' to verify your email address and activate your account. The code will expire in 24 hours.';
  return (
    <Screen style={styles.screen}>
      <View style={styles.profilePictureBorder}>
        <Image
          style={styles.stemeLogo}
          source={require('../assets/stemeLogo.png')}
        />
      </View>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.text}>{verifyMessage}</Text>
      <CustomButton text={'Resend Code'} type="TERTIARY" />
      {/* Should run backend code to resend code */}
      <AppForm
        initialValues={{ verificationCode: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="verificationCode"
          placeholder="Enter Code"
        />
        <SubmitButton text={'CONFIRM'} />
      </AppForm>
      <CustomButton text={'Change Email'} type="TERTIARY" />
      {/* Should run backend code to change email */}
    </Screen>
  );
}

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  profilePictureBorder: {
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4881CB',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 50,
  },
  stemeLogo: {
    maxHeight: 120,
    maxWidth: 120,
  },
  title: {
    color: 'white',
    fontSize: 32,
    paddingTop: 10,
  },
  text: {
    fontSize: 14,
    color: 'white',
    align: 'left',
    paddingVertical: 20,
    textAlign: 'center',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

