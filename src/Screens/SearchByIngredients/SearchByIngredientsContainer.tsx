import React, { useEffect, useState } from 'react';
import { SearchByIngredients } from './SearchByIngredients';
import { RootScreens } from '..';

export const SearchByIngredientsContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    useEffect(() => {
    }, []);

    return <SearchByIngredients onNavigate={onNavigate} />;
};
