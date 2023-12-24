import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { RootScreens } from '..';

export const SearchContainer = (props : any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    useEffect(() => {
    }, []);

    return <Search onNavigate={onNavigate} />;
};
