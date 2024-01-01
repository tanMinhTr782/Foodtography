import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';

export const SearchBarContainer = (props : any) => {
    useEffect(() => {
    }, []);

    return <SearchBar icon={props.icon} goBack={props.goBack} process={props.process} clear={props.clear} />;
};
