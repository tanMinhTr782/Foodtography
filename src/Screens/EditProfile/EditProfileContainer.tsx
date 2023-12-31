import { EditProfile } from "./EditProfile";
import React from "react";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CreateEditProfileNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.EDITPROFILE>;

export const EditProfileContainer = ({ navigation }: any) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <EditProfile />;
};