import { AddIngredients } from "./AddIngredient";
import React from "react";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AddIngredientNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.ADDINGREDIENTS>;

export const AddIngredientContainer = ({ navigation }: AddIngredientNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
        navigation.navigate(screen);
    };
    return <AddIngredients />;
};
