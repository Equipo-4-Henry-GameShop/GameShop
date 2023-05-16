import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {

      // setImage(result.assets[0].uri);
      await uploadImageAsync(result.assets[0].uri);

    }
  };

  const uploadImageAsync = async (uri) => {
    const body = new FormData();
    body.append("file", {
      uri: uri,
      type: "image/jpeg",
      name: "upload.jpg",
    });
    body.append("upload_preset", "ml_default");
    body.append("cloud_name", "deamondhero");

    const response = await fetch("https://api.cloudinary.com/v1_1/deamondhero/upload", {
      method: "POST",
      body: body,
    });

    const result = await response.json();
    return result.secure_url;
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}