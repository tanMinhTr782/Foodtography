import React, { useEffect, useState } from 'react';
import { RootScreens } from '..';
import { EnhanceDetail } from './EnhanceDetail';

export const EnhanceDetailContainer = (props : any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    const goBack = () => {
        props.navigation.goBack();
    }

    useEffect(() => {
    }, []);

    return <EnhanceDetail onNavigate={onNavigate} goBack={goBack} type={props.route.params.type} data={props.route.params.data} />;
};
