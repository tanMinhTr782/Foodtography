import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './Main';
import { WelcomeContainer } from '@/Screens/Welcome';
import { RootScreens } from '@/Screens';
import { LoginContainer } from '@/Screens/Login';
import { SignupContainer } from '@/Screens/Signup';
import { SearchContainer } from '@/Screens/Search';
import { SearchByIngredientsContainer } from '@/Screens/SearchByIngredients';
import { LoginNavigator } from './Login';
import { MealPlanningContainer } from '@/Screens/MealPlanning';
import { AddRecipeFromSearchContainer } from '@/Screens/AddRecipeFromSearch';

export type RootStackParamList = {
    [RootScreens.MAIN]: undefined;
    [RootScreens.WELCOME]: undefined;
    [RootScreens.LOGIN]: undefined;
    [RootScreens.SIGNUP]: undefined;
    [RootScreens.SEARCH]: undefined;
    [RootScreens.SEARCHBYINGREDIENTS]: undefined;
    [RootScreens.MEALPLANNING]: undefined;
    [RootScreens.ADDRECIPEFROMSEARCH]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={RootScreens.WELCOME} component={WelcomeContainer} />
                <RootStack.Screen name={RootScreens.MAIN} component={MainNavigator} options={{}} />
                <RootStack.Screen name={RootScreens.LOGIN} component={LoginContainer} />
                <RootStack.Screen name={RootScreens.MEALPLANNING} component={MealPlanningContainer} />
                <RootStack.Screen name={RootScreens.ADDRECIPEFROMSEARCH} component={AddRecipeFromSearchContainer} />
                <RootStack.Screen name={RootScreens.SIGNUP} component={SignupContainer} />
                <RootStack.Screen name={RootScreens.SEARCH} component={SearchContainer} />
                <RootStack.Screen name={RootScreens.SEARCHBYINGREDIENTS} component={SearchByIngredientsContainer} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export { ApplicationNavigator };
