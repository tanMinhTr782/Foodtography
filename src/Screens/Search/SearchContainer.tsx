import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';
import { RootScreens } from '..';

type WelcomeScreenNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.WELCOME>;

export const SearchContainer = () => {
    useEffect(() => {
    }, []);

    return <Search />;
};
