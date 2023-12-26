import { Signup } from './Signup';
import React, { useState, useEffect } from 'react';
import { RootScreens } from '..';

export const SignupContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    return <Signup onNavigate={onNavigate} />;
};
