import { RootScreens } from "..";
import { MyPantry } from "./MyPantry";


export const MyPantryContainer = (props: any) => {
    const onNavigate = (screen: RootScreens) => {
        props.navigation.navigate(screen);
    };
    const onGoBack = () => {
        props.navigation.goBack();
    };

    const onReplace = (screen: RootScreens) => {
        props.navigation.replace(screen);
    };

    return <MyPantry onNavigate={onNavigate} onGoBack={onGoBack} onReplace={onReplace} />;
};
