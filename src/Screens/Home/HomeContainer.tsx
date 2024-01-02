import { Home } from './Home';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { RootScreens } from '..';

export const HomeContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };
    return <Home onNavigate={onNavigate} />;
};
