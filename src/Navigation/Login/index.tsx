import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeContainer } from '@/Screens/Home';
import { MealPlanningContainer } from '@/Screens/MealPlanning';
import { LoginContainer } from '@/Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { RootScreens } from '@/Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeContainer } from '@/Screens/Welcome';
import { SignupContainer } from '@/Screens/Signup';
import { MainNavigator } from '../Main';

export type RootStackParamList = {
    [RootScreens.MAIN]: undefined;
    [RootScreens.WELCOME]: undefined;
    [RootScreens.LOGIN]: undefined;
    [RootScreens.SIGNUP]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
export const LoginNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={RootScreens.WELCOME} component={WelcomeContainer} />
                <RootStack.Screen name={RootScreens.MAIN} component={MainNavigator} options={{}} />
                <RootStack.Screen name={RootScreens.LOGIN} component={LoginContainer} />
                <RootStack.Screen name={RootScreens.SIGNUP} component={SignupContainer} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
