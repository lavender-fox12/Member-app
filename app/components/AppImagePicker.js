import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

function AppImagePicker({ style }) {
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
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={style} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AppImagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
