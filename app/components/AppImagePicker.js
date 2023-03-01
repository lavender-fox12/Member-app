import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
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
      <View style={[style, styles.container]}>
        <Text>Please</Text>
        {image && <Image source={{ uri: image }} style={style} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AppImagePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
