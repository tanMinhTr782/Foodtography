import React, { useState, useEffect, useRef, SetStateAction } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ingredient } from "../Search/data/data";
import { SearchByIngredientsContainer } from '@/Screens/SearchByIngredients';
import { styles } from "./styles";
type CreateScannerNavitgatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.SEARCHBYPHOTO>;



export const SearchByPhoto = (props: { onNavigate: (screen: RootScreens, type: string, count: number, ingredients: string[], scanImage: string) => void}) => {
  let cameraRef = useRef<any>();
  const reference = useRef<any>();
  const navigation = useNavigation<CreateScannerNavitgatorProps>();
  const [photo, setPhoto] = useState("");
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);
  const [result, setResult] = useState([]);
  reference.current = result;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.canceled) {
      setPhoto(result.assets[0] as unknown as SetStateAction<string>);
    }
  };
  const captureImage = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  const handleSearch = () => {
      props.onNavigate(RootScreens.SEARCHRESULT, "Scan", result.length, result, photo);
  };

  const getIngredients = async (IMAGE_BYTES_STRING: string) => {

    const PAT = '63528cf35da24698b5275c9ad45ba6ae';
    const USER_ID = 'clarifai';
    const APP_ID = 'main';
    const MODEL_ID = 'food-item-recognition';
    const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "base64": IMAGE_BYTES_STRING
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };
    var keep = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions).then(response => response.text());
    var parsedData = JSON.parse(keep);
    let ret = [];
    for (var i = 0; i < 5; ++i) {
      ret.push(parsedData.outputs[0].data.concepts[i]["name"]);
    }
    setResult(ret as unknown as SetStateAction<never[]>);
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMediaLibraryPermission(cameraPermission.status === 'granted');
    })();
  }, [])

  if (hasCameraPermission === undefined) {
    return <Text> Requesting Permission...</Text>
  }
  else if (!hasCameraPermission) {
    return <Text>Permission for camera is not granted. Please change this on "Settings".</Text>
  }
  if (photo) {
    getIngredients(photo['base64' as any]);
    return (
      <SafeAreaView style={styles.cameraContainer}>
        <Text style={styles.resultTitle}> Scan Result </Text>
        <Text style={styles.result}>1. {result[0]} | 2. {result[1]}</Text>
        <Text style={styles.result}>3. {result[2]} | 4. {result[3]} | 5. {result[4]}</Text>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo['base64' as any] }} />
        <SafeAreaView style={{ flexDirection: 'row' }}>
          <Button title="Discard" onPress={() => setPhoto("")} />
          <Button title="Search With Scan Result" color='red' onPress={() => handleSearch() } />
        </SafeAreaView>
      </SafeAreaView>
    );
  };
  return (
    <>
      <View style={styles.createRecipeContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Search By Photo</Text>
        </View>
        <Text style={styles.subTitle}>Capture or choose image from library </Text>
          <Text style={styles.subTitle}>to begin scanning</Text>
        <Camera style={styles.cameraContainer} ref={cameraRef}>


        </Camera>

        <View style={styles.twoButtonContainer}>
          <View style={styles.leftBtn}>
            <TouchableOpacity onPress={pickImage} style={styles.uploadIMG}>
              <MaterialCommunityIcons style={styles.iconToUploadIMG} name="file-image-plus-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.subTitle}>Choose Image</Text>
            <Text style={styles.subTitle}>From Library </Text>
          </View>
          <View style={styles.rightBtn}>
            <TouchableOpacity onPress={captureImage} style={styles.buttonContainer}>
              <Ionicons name="scan-circle-outline" size={40} color="black" />
            </TouchableOpacity>
            <Text style={styles.subTitle}>Capture Image </Text>
          </View>

        </View>

      </View>
    </>
  )
};