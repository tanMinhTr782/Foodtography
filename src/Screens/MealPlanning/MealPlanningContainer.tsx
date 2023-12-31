import { MealPlanning } from './MealPlanning';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';
import { RootScreens } from '..';

export const MealPlanningContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    const onReplace = (screen: RootScreens) => {
        props.navigation.replace(screen);
    };

    return <MealPlanning onNavigate={onNavigate} onReplace={onReplace} />;
};
