import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './Main';
import { WelcomeContainer } from '@/Screens/Welcome';
import { RootScreens } from '@/Screens';
import { LoginContainer } from '@/Screens/Login';
import { SignupContainer } from '@/Screens/Signup';
import { SearchContainer } from '@/Screens/Search';
import { SearchByIngredientsContainer } from '@/Screens/SearchByIngredients';
import { CreateRecipeContainer } from '@/Screens/CreateRecipe/CreateRecipeContainer';
import { OnboardingContainer } from '@/Screens/Onboarding/OnboardingContainer';
import { SettingsContainer } from '@/Screens/Settings/SettingsContainer';
import { EditProfileContainer } from '@/Screens/EditProfile/EditProfileContainer';
import { AddIngredientContainer } from '@/Screens/CreateRecipe/AddIngredientContainer';
import { LoginNavigator } from './Login';
import { MealPlanningContainer } from '@/Screens/MealPlanning';
import { AddRecipeFromSearchContainer } from '@/Screens/AddRecipeFromSearch';
import { SearchResultContainer } from '@/Screens/SearchResult';
import { EnhanceSkillContainer } from '@/Screens/EnhanceSkill';
import { EnhanceDetailContainer } from '@/Screens/EnhanceDetail';
import { RecipeDetailContainer } from '@/Screens/RecipeDetail';

export type RootStackParamList = {
    [RootScreens.MAIN]: undefined;
    [RootScreens.WELCOME]: undefined;
    [RootScreens.LOGIN]: undefined;
    [RootScreens.SIGNUP]: undefined;
    [RootScreens.SEARCH]: undefined;
    [RootScreens.SEARCHBYINGREDIENTS]: undefined;
    [RootScreens.CREATERECIPES]: undefined;
    [RootScreens.ONBOARDING]: undefined;
    [RootScreens.SETTINGS]: undefined;
    [RootScreens.EDITPROFILE]: undefined;
    [RootScreens.ADDINGREDIENTS]: {};
    [RootScreens.SEARCHRESULT]: undefined;
    [RootScreens.ENHANCESKILL]: undefined;
    [RootScreens.ENHANCEDETAIL]: undefined;
    [RootScreens.MEALPLANNING]: undefined;
    [RootScreens.ADDRECIPEFROMSEARCH]: undefined;
    [RootScreens.RECIPEDETAIL]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
    const [firstLaunch, setFirstLaunch] = useState<Boolean>(true);
    useEffect(() => {
        async function setData() {
            const appData = await AsyncStorage.getItem("appLaunched");
            if (appData == null) {
                setFirstLaunch(true);
                AsyncStorage.setItem("appLaunched", "true");
            }
            else {
                setFirstLaunch(false);
            }
        }
        setData();
    }, []);
    return (
        <NavigationContainer>
            <StatusBar />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {firstLaunch && <RootStack.Screen name={RootScreens.ONBOARDING} component={OnboardingContainer} />}
                <RootStack.Screen name={RootScreens.WELCOME} component={WelcomeContainer} />
                <RootStack.Screen name={RootScreens.MAIN} component={MainNavigator} options={{}} />
                <RootStack.Screen name={RootScreens.LOGIN} component={LoginContainer} />
                <RootStack.Screen name={RootScreens.MEALPLANNING} component={MealPlanningContainer} />
                <RootStack.Screen name={RootScreens.ADDRECIPEFROMSEARCH} component={AddRecipeFromSearchContainer} />
                <RootStack.Screen name={RootScreens.SIGNUP} component={SignupContainer} />
                <RootStack.Screen name={RootScreens.SEARCH} component={SearchContainer} />
                <RootStack.Screen name={RootScreens.SEARCHBYINGREDIENTS} component={SearchByIngredientsContainer} />
                <RootStack.Screen name={RootScreens.CREATERECIPES} component={CreateRecipeContainer} />
                <RootStack.Screen name={RootScreens.SETTINGS} component={SettingsContainer} />
                <RootStack.Screen name={RootScreens.EDITPROFILE} component={EditProfileContainer} />
                <RootStack.Screen name={RootScreens.ADDINGREDIENTS} component={AddIngredientContainer} />
                <RootStack.Screen name={RootScreens.SEARCHRESULT} component={SearchResultContainer} />
                <RootStack.Screen name={RootScreens.ENHANCESKILL} component={EnhanceSkillContainer} />
                <RootStack.Screen name={RootScreens.ENHANCEDETAIL} component={EnhanceDetailContainer} />
                <RootStack.Screen name={RootScreens.RECIPEDETAIL} component={RecipeDetailContainer} />
            </RootStack.Navigator>
        </NavigationContainer>
    )

};

export { ApplicationNavigator };
