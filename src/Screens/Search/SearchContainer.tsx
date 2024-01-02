import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { RootScreens } from '..';
interface Item {
    id: string;
    name: string;
    image: string;
    description: string;
    cookingTips: string;
    unit: string;
    create_at: Date;
    update_at: Date;
    selected: number;
}

export const SearchContainer = (props : any) => {
    const onNavigate = (screen: RootScreens, data: Item) => {
        props.navigation.navigate(screen, { data });
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
