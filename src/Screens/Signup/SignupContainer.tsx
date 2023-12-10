import { Signup } from './Signup';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type WelcomeScreenNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.SIGNUP>;

export const SignupContainer = ({ navigation }: WelcomeScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
        navigation.navigate(screen);
    };

    return <Signup onNavigate={onNavigate} />;
};
