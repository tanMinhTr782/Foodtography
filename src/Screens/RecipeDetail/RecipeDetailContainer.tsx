import { RecipeDetail } from "./RecipeDetail";
import React from "react";

export const RecipeDetailContainer = (props: any) => {
    const goBack = () => {
        props.navigation.goBack();
    }
    return <RecipeDetail goBack={goBack} data={props.route.params.resultData}/>;
};
