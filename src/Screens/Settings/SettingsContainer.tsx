import { Settings } from "./Settings";
import React from "react";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CreateSettingsNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.SETTINGS>;

export const SettingsContainer = ({ navigation }: any) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <Settings />;
};