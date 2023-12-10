import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './Main';
import { WelcomeContainer } from '@/Screens/Welcome';
import { RootScreens } from '@/Screens';
import { LoginContainer } from '@/Screens/Login';
import { SignupContainer } from '@/Screens/Signup';

export type RootStackParamList = {
    [RootScreens.MAIN]: undefined;
    [RootScreens.WELCOME]: undefined;
    [RootScreens.LOGIN]: undefined;
    [RootScreens.SIGNUP]: undefined;
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
                <RootStack.Screen name={RootScreens.SIGNUP} component={SignupContainer} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export { ApplicationNavigator };
