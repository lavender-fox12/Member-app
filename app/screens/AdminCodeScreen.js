import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { auth, app } from '../navigation/firebase';
import { doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import Screen from '../components/Screen';
import SubmitButton from '../components/submitButton';

const db = getFirestore(app);

function EditProfileScreen(props) {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const adminStatus = await checkIsAdmin();
      setIsAdmin(adminStatus);
    };

    setInterval(() => {
      checkAdminStatus();
    }, 1000);
  }, []);

  if (isAdmin === null) {
    return (
      <Screen style={styles.screen}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Checking admin status...</Text>
      </Screen>
    );
  }

  if (isAdmin) {
    return (
      <Screen style={styles.screen}>
        <Text style={{ color: 'white', textAlign: 'center' }}>You are already an Admin.</Text>
      </Screen>
    );
  }

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          code: ''
        }}
        onSubmit={(values) => verifyAdminCode(values.code)}
      >
        <AppFormField
          autoCapitalize="none"
          name={'code'}
          placeholder="Admin Code"
          secureTextEntry
          autoCorrect={false}
        />
        <SubmitButton text={'SUBMIT'} />
      </AppForm>
    </Screen>
  );
}

async function verifyAdminCode(code) {
  const adminCodeDoc = await getDoc(doc(db, `RoleCodes/Admin`));
  const adminCode = adminCodeDoc.data().code;

  if (adminCode !== code) return;
  
  await setDoc(doc(db, `users/${auth.currentUser.uid}`), {
    role: 'admin'
  });
}

async function checkIsAdmin() {
  const userId = await waitForUserId();
  const userDoc = await getDoc(doc(db, `users/${userId}`));

  if (userDoc.data() === undefined) return false;
  const userRole = userDoc.data().role;

  return userRole === 'admin';
}

function waitForUserId() {
  let userId = auth.currentUser.uid;

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (typeof userId !== 'undefined' && userId !== null) {
        clearInterval(interval);
        resolve(userId);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error('Timeout: User was not retrieved in time.'));
    }, 5000);
  });
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 120,
  },
});
