import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import Screen from '../components/Screen';
import TempProfilePhoto from '../assets/tempProfilePhoto.png';
import CustomButton from '../components/customButton';
import { auth } from '../navigation/firebase';
import { signOut } from 'firebase/auth';

function DashboardScreen({ navigation }) {
  const handleSignOut = async () => {
    await signOut(auth);
    navigation.navigate('SignIn');
  };

  const { height } = useWindowDimensions();

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.text}> {'John Doe'} </Text>
        <Text style={styles.text}> {'Dashboard'} </Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Settings')}
        >
          <Image
            source={TempProfilePhoto}
            style={[
              styles.profilePicture,
              { height: height * 0.08 },
              { width: height * 0.08 },
              { borderRadius: height * 0.045 },
            ]}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.stats}>
        <Text style={styles.text}>
          {' '}
          {'    Points        Tasks Completed       Total Hr'}{' '}
        </Text>
        <Text style={styles.text}>
          {' '}
          {'     350                     50/80                   6 Hrs'}{' '}
        </Text>
      </View>
      <View style={styles.paddedBox}>
        <Text style={styles.text}>
          {' '}
          {'Rank 23                                  1738 Points'}{' '}
        </Text>
      </View>
      <View style={styles.paddedBox}>
        <Text style={styles.text}>
          {' '}
          {'Badge Here                            Planet Here'}{' '}
        </Text>
      </View>
      <CustomButton text="Sign Out" onPress={handleSignOut} type="PRIMARY" />
    </Screen>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    margin: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  profilePictureBorder: {
    borderWidth: 3,
    borderColor: '#4881CB',
  },
  profilePicture: {
    margin: 'auto',
    maxHeight: 100,
    maxWidth: 100,
  },
  text: {
    fontSize: 14,
    color: 'white',
    marginTop: -4,
    marginBottom: 10,
    marginRight: 'auto',
  },
  paddedBox: {
    backgroundColor: '#161B45',

    borderColor: '#979797',
    borderWidth: 0,
    borderRadius: 15,

    padding: 40,
    marginVertical: 15,

    textAlign: 'center',
  },

  stats: {
    alignItems: 'center',
    margin: 20,
  },
});
