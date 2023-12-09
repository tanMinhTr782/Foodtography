import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SearchScreenNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.SEARCH>;

export const SearchContainer = ({ navigation }: SearchScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
        navigation.navigate(screen);
    };

    useEffect(() => {
    }, []);

    return <Search onNavigate={onNavigate} />;
};
