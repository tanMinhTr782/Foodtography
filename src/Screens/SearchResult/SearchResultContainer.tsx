import React, { useEffect, useState } from 'react';
import { SearchResult } from './SearchResult';
import { RootScreens } from '..';

export const SearchResultContainer = (props: any) => {
    const onNavigate = (screen: RootScreens, resultData: any) => {
        props.navigation.navigate(screen, {resultData});
    };

    const goBack = () => {
        props.navigation.goBack();
    }

    useEffect(() => {
    }, []);

    return <SearchResult onNavigate={onNavigate} type={props.route.params.type} count={props.route.params.count ? props.route.params.count : 1} ingredients={props.route.params.ingredients} goBack={goBack}
        dataSearch={props.route.params.dataSearch}
    />;
};
