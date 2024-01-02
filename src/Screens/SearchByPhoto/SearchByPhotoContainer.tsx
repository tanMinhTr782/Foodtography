import { SearchByPhoto } from "./SearchByPhoto";
import React from "react";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CreateScannerNavitgatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.SEARCHBYPHOTO>;

export const SearchByPhotoContainer = ({ navigation }: any) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <SearchByPhoto />;
};