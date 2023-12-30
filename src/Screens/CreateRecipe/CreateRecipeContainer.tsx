import { CreateRecipe } from "./CreateRecipe";
import React from "react";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CreateRecipeNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.CREATERECIPES>;

export const CreateRecipeContainer = ({ navigation }: CreateRecipeNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <CreateRecipe />;
};
