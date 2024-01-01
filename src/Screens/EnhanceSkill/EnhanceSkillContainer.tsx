import React, { useEffect, useState } from 'react';
import { RootScreens } from '..';
import { EnhanceSkill } from './EnhanceSkill';

export const EnhanceSkillContainer = (props : any) => {
    const onNavigate = (screen: RootScreens, type: string, data: any) => {
        props.navigation.navigate(screen, {type, data});
    };

    const goBack = () => {
        props.navigation.goBack();
    }

    useEffect(() => {
    }, []);

    return <EnhanceSkill onNavigate={onNavigate} goBack={goBack} title={props.route.params.title} />;
};
