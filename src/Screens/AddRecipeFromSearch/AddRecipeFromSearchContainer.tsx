import { RootScreens } from '..';
import { AddRecipeFromSearch } from './AddRecipeFromSearch';

export const AddRecipeFromSearchContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };

    return <AddRecipeFromSearch onNavigate={onNavigate} />;
};
