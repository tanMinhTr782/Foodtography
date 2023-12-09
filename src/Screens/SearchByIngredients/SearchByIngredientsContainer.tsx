import React, { useEffect, useState } from 'react';
import { SearchByIngredients } from './SearchByIngredients';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';
import { RootScreens } from '..';

type SearchByIngredientsScreenNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.SEARCHBYINGREDIENTS>;

export const SearchByIngredientsContainer = ({ navigation }: SearchByIngredientsScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
        navigation.navigate(screen);
    };

    useEffect(() => {
    }, []);

    return <SearchByIngredients onNavigate={onNavigate} />;
};
