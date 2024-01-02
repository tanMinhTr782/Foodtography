import { SearchByPhoto } from "./SearchByPhoto";
import React from "react";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CreateScannerNavitgatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.SEARCHBYPHOTO>;

export const SearchByPhotoContainer = ({ navigation }: any) => {
  const onNavigate = (screen: RootScreens, type: string, count: number, ingredients: string[], scanImage: string) => {
      navigation.navigate(screen, { type, count, ingredients, scanImage });
  };


   return <SearchByPhoto onNavigate={onNavigate} />;
};