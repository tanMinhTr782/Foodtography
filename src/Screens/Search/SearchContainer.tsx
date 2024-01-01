import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { RootScreens } from '..';

export const SearchContainer = (props : any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    const onNavigateFilter = (screen: RootScreens, type: any, count: number, ingredients: string[]) => {
        props.navigation.navigate(screen, { type, count, ingredients });
    };

    const onNavigateEnhance = (screen: RootScreens, title: string) => {
        props.navigation.navigate(screen, { title });
    };

    const onNavigateWSearch = (screen: RootScreens, dataSearch: any) => {
        props.navigation.navigate(screen, { dataSearch })
    };

    useEffect(() => {
    }, []);

    return <Search onNavigate={onNavigate} onNavigateFilter={onNavigateFilter} onNavigateEnhance={onNavigateEnhance}
        onNavigateWSearch={onNavigateWSearch}
    />;
};
