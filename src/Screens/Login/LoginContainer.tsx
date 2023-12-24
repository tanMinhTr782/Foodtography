import { Login } from './Login';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type WelcomeScreenNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.LOGIN>;

export const LoginContainer = ({ navigation }: WelcomeScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
        navigation.navigate(screen);
    };

    return <Login onNavigate={onNavigate} />;
};
