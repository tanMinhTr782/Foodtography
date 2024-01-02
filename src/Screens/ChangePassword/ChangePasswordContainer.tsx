import { ChangePassword } from './ChangePassword';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type WelcomeScreenNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.LOGIN>;

export const ChangePasswordContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    return <ChangePassword onNavigate={onNavigate} />;
};
