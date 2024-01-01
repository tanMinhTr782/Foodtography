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
import { updateInfo } from "@/API/auth";
import axios from "axios";


type CreateSettingsNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.SETTINGS>;

export const EditProfile = () => {
  const [name, setName] = useState("Lê Văn Bằng");
  const [dob, setDob] = useState("27-05-2002")
  const [phone, setPhone] = useState("0368514725")
  const [aboutMe, setAboutMe] = useState("I want to be master chef")
  const [saveChange, setSaveChange] = useState(true)
  const [password, setPassword] = useState('#thisis2024');
  const imageDataURL = 'https://res.cloudinary.com/dwfejy00u/image/upload/v1704003579/sampleDish_ovn9ux.jpg';
  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrl, setImageUrl] = useState('')
  const [id, setId] = useState<String>("")
  const [email, setEmail] = useState<String>("")
  const [user, setUser] = useState<String>("")


  const getUser = async () => {
    await AsyncStorage.getItem('user').then(res => {
      console.log(res)
      setUser(res)
      setId(res.substring(res.indexOf("id") + 5, res.indexOf(',', res.indexOf("id") + 5) - 1));
      setName(res.substring(res.indexOf("name") + 7, res.indexOf(',', res.indexOf("name") + 7) - 1))
      setEmail(res.substring(res.indexOf("email") + 8, res.indexOf(',', res.indexOf("email") + 8) - 1))
      setImageUrl(res.substring(res.indexOf("avatar") + 9, res.indexOf(',', res.indexOf("avatar") + 9) - 1))
    })
  }

  const handleSetUser = () => {
    const newUserInfo = user.replace(user.substring(user.indexOf("name") + 7, user.indexOf(',', user.indexOf("name") + 7) - 1), name)
    const newUserInfo2 = newUserInfo.replace(newUserInfo.substring(newUserInfo.indexOf("avatar") + 9, newUserInfo.indexOf(',', newUserInfo.indexOf("avatar") + 9) - 1), imageUrl)
    AsyncStorage.setItem('user', newUserInfo2)
  }

  const uploadImage = async (selectImage: any) => {
    const image = {
      uri: selectImage,
      type: 'image/jpeg', // Change the type according to your image format
      name: 'image', // Change the name as desired
    };

    const formData = new FormData();
    formData.append("file", image)
    formData.append("upload_preset", "foodtography")
    formData.append("cloud_name", "dnlnws4ma")

    try {
      await fetch('https://api.cloudinary.com/v1_1/dnlnws4ma/image/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      },
      ).then(res => res.json())
        .then(data => setImageUrl(data.url))
    } catch (error) {
      console.log(error)
    }
  }

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
      uploadImage(result.assets[0].uri)
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
      'Update information successfully!!',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ],

    );

  const navigation = useNavigation<CreateSettingsNavigatorProps>();

  React.useEffect(() => {
    getUser()
  }, [])
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
            {
              imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.imageFrame} />
              ) : (
                <View style={styles.imageFrame2}></View>
              )
            }

            <View style={styles.logoGroup}>
              <Ionicons name="camera-outline" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.firstComponentContainers}>
          <Text style={styles.componentText}>Email</Text>
          <Text style={styles.componentArrow}>
            {email}
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

        <TouchableHighlight
          underlayColor="#3C7363AA"
          style={styles.saveBtn}
          onPress={() => {
            setSaveChange(true);
            updateInfo(id, { name: name, avatar: imageUrl }).then(res => {
              console.log(res)
              if (res.message === "Update user successfully") {
                showSuccessAlert();
                handleSetUser()
              }
            })

          }}
        >
          <Text style={styles.saveText} >Save</Text>
        </TouchableHighlight>
      </View>
    </>
  )
}