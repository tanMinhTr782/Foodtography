import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Onboarding from 'react-native-onboarding-swiper';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles';
type CreateSettingsNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.SETTINGS>;

const showAlert = () =>
  Alert.alert(
    'Alert',
    'Do you want to log out ?',
    [
      {
        text: 'OK',
        onPress: () => Alert.alert('Log out Successfully'),
        style: 'cancel',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],

  );


export const Settings = () => {
  const navigation = useNavigation<CreateSettingsNavigatorProps>();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <View style={styles.createRecipeContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
            <Ionicons name="chevron-back" size={35} color="#3C7363" />
          </TouchableOpacity>
          <Text style={styles.title}> Settings </Text>
        </View>

        <View style={styles.userInfoContainer}>
          <Image source={require('../../../assets/sampleDish.jpg')} style={styles.imageFrame} />
          <Text style={styles.userName}>Lê Văn Bằng </Text>
        </View>

        <TouchableOpacity>
          <View style={styles.componentContainers}>
            <Ionicons name="md-person-outline" size={24} color="black" />
            <Text style={styles.componentText}> Edit profile </Text>
            <Text style={styles.componentArrow}>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </Text>
          </View>
        </TouchableOpacity>

          <View style={styles.componentContainers}>
            <Ionicons name="md-notifications-outline" size={24} color="black" />
            <Text style={styles.componentText}> Push Notification </Text>
            <View style={styles.componentSwitch}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}

              />
            </View>
          </View>

        <TouchableOpacity>
          <View style={styles.componentContainers}>
            <Ionicons name="md-information-circle-outline" size={24} color="black" />
            <Text style={styles.componentText}> About Foodtography</Text>
            <Text style={styles.componentArrow}>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {showAlert}>
          <View style={styles.componentContainers}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={styles.componentText}> Log Out </Text>
            <Text style={styles.componentArrow}>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.logoGroup}>
        <TouchableOpacity><MaterialIcons style = {styles.logoSocial} name="facebook" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity><Ionicons style = {styles.logoSocial}  name="md-logo-instagram" size={24} color="black" /></TouchableOpacity>
          <TouchableOpacity><Ionicons  name="logo-linkedin" size={24} color="black" /></TouchableOpacity>
        </View>
        <Text style={styles.version}> Version 1.1.0 </Text>
        {/* 
         <View> 
                              <Text> About Foodtography</Text>
                              <Ionicons name="chevron-forward" size={24} color="black" />
         </View>
         <View> 
         <MaterialIcons name="logout" size={24} color="black" />
                                  <Text> Log out </Text>
                                  <Ionicons name="chevron-forward" size={24} color="black" />
         </View> */}
      </View>

    </>
  )
}