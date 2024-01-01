import { RootScreens } from '..';
import { AddRecipeFromSearch } from './AddRecipeFromSearch';

export const AddRecipeFromSearchContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };
    const onGoBack = () => {
        props.navigation.goBack();
    };

    const onReplace = (screen: RootScreens) => {
        props.navigation.replace(screen);
    };

    return <AddRecipeFromSearch onNavigate={onNavigate} onGoBack={onGoBack} onReplace={onReplace} />;
};
