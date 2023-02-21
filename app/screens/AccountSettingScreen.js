import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

function AccountSettingScreen(props) {
  const [image, setImage] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) {
      alert('You need to enable permissions to access the library');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error reading an image');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={pickImage}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AccountSettingScreen;

const styles = StyleSheet.create({});
