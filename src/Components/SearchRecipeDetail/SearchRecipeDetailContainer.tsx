import React, { useEffect, useState } from 'react';
import { SearchRecipeDetail } from './SearchRecipeDetail';

export const SearchRecipeDetailContainer = (props : any) => {
    useEffect(() => {
    }, []);

    return <SearchRecipeDetail specialMode={props.specialMode ? props.specialMode : 0} favorite={props.favorite} star={props.star}
        name={props.name} image={props.image} whereToNav={props.whereToNav} noneStar={props.noneStar} />;
};
