import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
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
    const [name,setName] = useState("Lê Văn Bằng");
    const [password, setPassword] = useState('#thisis2024');
    const imageDataURL = 'https://res.cloudinary.com/dwfejy00u/image/upload/v1704003579/sampleDish_ovn9ux.jpg'; 
    const [selectedImage, setSelectedImage] = useState(imageDataURL); 
    const handleSubmit = async () =>  {
      const user = {name: name}
      const pw = {password: password}
      const avatar = {selectedImage: selectedImage}
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
    
        console.log(result);
    
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        }
      };


    const navigation = useNavigation<CreateSettingsNavigatorProps>();
    return (
        <>
            <View style={styles.createRecipeContainer}>
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                <Ionicons name="chevron-back" size={35} color="#3C7363" />
            </TouchableOpacity>
            <Text style={styles.title}> Edit Profile </Text>
            </View>

        <View style={styles.userInfoContainer}>  
        <TouchableOpacity onPress = {pickImage}>
          <Image source={{uri: selectedImage}} style={styles.imageFrame} />
          <View style={styles.logoGroup}>
          <Ionicons  name="camera-outline" size={20} color="white" />
          </View>
        </TouchableOpacity>
        </View>

          <View style={styles.componentContainers}>
            <Text style={styles.componentText}>Name </Text>
            <TextInput
            value = {name}
            style={styles.componentArrow}
            onChangeText={value=>setName(value)}
            editable = {true}
            placeholderTextColor={Colors.BLACK}

            >
            </TextInput>
          </View>

          <View style={styles.componentContainers}>
            <Text style={styles.componentText}>Email</Text>
            <Text style={styles.componentArrow}>
            tan.tranminh0708@gmail.com
            </Text>
          </View>

          <View style={styles.componentContainers}>
            <Text style={styles.componentText}>Name </Text>
            <TextInput
            value = {password}
            style={styles.componentArrow}
            onChangeText={value=>setPassword(value)}
            editable = {true}
            secureTextEntry
            placeholderTextColor={Colors.BLACK}

            >
            </TextInput>
          </View>

  

            </View>
        </>
    )
}