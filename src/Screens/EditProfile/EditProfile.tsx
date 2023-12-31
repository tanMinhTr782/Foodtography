import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import Onboarding from 'react-native-onboarding-swiper';
import Ionicons from "@expo/vector-icons/Ionicons";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles';
import { Colors } from '@/Theme/Variables';
import AsyncStorage from "@react-native-async-storage/async-storage";

type CreateSettingsNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.SETTINGS>;


export const EditProfile = () => {
  const [name, setName] = useState("Lê Văn Bằng");
  const [dob, setDob] = useState("27-05-2002")
  const [phone, setPhone] = useState("0368514725")
  const [aboutMe, setAboutMe] = useState("I want to be master chef")
  const [saveChange, setSaveChange] = useState(true)
  const [password, setPassword] = useState('#thisis2024');
  const imageDataURL = 'https://res.cloudinary.com/dwfejy00u/image/upload/v1704003579/sampleDish_ovn9ux.jpg';
  const [selectedImage, setSelectedImage] = useState(imageDataURL);
  const handleSubmit = async () => {
    const user = { name: name }
    const pw = { password: password }
    const avatar = { selectedImage: selectedImage }
    AsyncStorage.setItem('user', JSON.stringify(user))
    AsyncStorage.setItem('pw', JSON.stringify(pw))
    AsyncStorage.setItem('avatar', JSON.stringify(avatar))
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const showAlert = () =>
    Alert.alert(
      'Alert',
      'You haven\'t saved your changes yet, are you sure you want to do that?',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],

    );

  const showSuccessAlert = () =>
    Alert.alert(
      'Alert',
      'Save successfully!!',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ],

    );

  const navigation = useNavigation<CreateSettingsNavigatorProps>();
  return (
    <>
      <View style={styles.createRecipeContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { if (saveChange) navigation.goBack(); else showAlert() }} style={{ flexDirection: 'row' }}>
            <Ionicons name="chevron-back" size={35} color="#3C7363" />
          </TouchableOpacity>
          <Text style={styles.title}> Edit Profile </Text>
        </View>

        <View style={styles.userInfoContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Image source={{ uri: selectedImage }} style={styles.imageFrame} />
            <View style={styles.logoGroup}>
              <Ionicons name="camera-outline" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.firstComponentContainers}>
          <Text style={styles.componentText}>Email</Text>
          <Text style={styles.componentArrow}>
            tan.tranminh0708@gmail.com
          </Text>
        </View>

        <View style={styles.line}></View>
        <View style={styles.componentContainers}>
          <Text style={styles.componentText}>Name </Text>
          <TextInput
            value={name}
            style={styles.componentArrow}
            onChangeText={value => { setName(value); setSaveChange(false) }}
            editable={true}
            placeholderTextColor={Colors.BLACK}
            autoFocus={true}
          >
          </TextInput>
        </View>

        <View style={styles.line}></View>
        <View style={styles.componentContainers}>
          <Text style={styles.componentText}>Date of birth</Text>
          <TextInput
            value={dob}
            style={styles.componentArrow}
            onChangeText={value => { setDob(value); setSaveChange(false) }}
            editable={true}
            placeholderTextColor={Colors.BLACK}
          >
          </TextInput>
        </View>

        <View style={styles.line}></View>
        <View style={styles.componentContainers}>
          <Text style={styles.componentText}>Phone Number</Text>
          <TextInput
            value={phone}
            style={styles.componentArrow}
            onChangeText={value => { setPhone(value); setSaveChange(false) }}
            editable={true}
            placeholderTextColor={Colors.BLACK}
          >
          </TextInput>
        </View>

        <View style={styles.line}></View>
        <View style={styles.componentContainers}>
          <Text style={styles.componentText}>About me</Text>
          <TextInput
            value={aboutMe}
            style={styles.componentArrow}
            onChangeText={value => { setAboutMe(value); setSaveChange(false) }}
            editable={true}
            placeholderTextColor={Colors.BLACK}
          >
          </TextInput>
        </View>

        {/* <View style={styles.componentContainers}>
          <Text style={styles.componentText}>Name </Text>
          <TextInput
            value={password}
            style={styles.componentArrow}
            onChangeText={value => setPassword(value)}
            editable={true}
            secureTextEntry
            placeholderTextColor={Colors.BLACK}

          >
          </TextInput>
        </View> */}

        <TouchableHighlight
          underlayColor="#3C7363AA"
          style={styles.saveBtn}
          onPress={() => {
            setSaveChange(true);
            showSuccessAlert();
          }}
        >
          <Text style={styles.saveText} >Save</Text>
        </TouchableHighlight>

      </View>
    </>
  )
}