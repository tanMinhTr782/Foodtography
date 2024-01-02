import { Home } from './Home';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { RootScreens } from '..';

export const HomeContainer = (props: any) => {
    const onNavigate = (screen: RootScreens, resultData: any) => {
        props.navigation.navigate(screen, {resultData});
    };
    return <Home onNavigate={onNavigate} />;
};
