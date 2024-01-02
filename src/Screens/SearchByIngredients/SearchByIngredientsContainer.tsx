import React, { useEffect, useState } from 'react';
import { SearchByIngredients } from './SearchByIngredients';
import { RootScreens } from '..';

export const SearchByIngredientsContainer = (props: any) => {
    const onNavigate = (screen: RootScreens, type: any, count: number, ingredients: string[]) => {
        props.navigation.navigate(screen, { type, count, ingredients });
    };

    const goBack = () => {
        props.navigation.goBack();
    }

    useEffect(() => {
    }, []);

    return <SearchByIngredients onNavigate={onNavigate} goBack={goBack} previousData={props.route.params.data ? props.route.params.data : {}} />;
};
