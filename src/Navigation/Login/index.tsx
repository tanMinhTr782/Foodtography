import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeContainer } from '@/Screens/Home';
import { MealPlanningContainer } from '@/Screens/MealPlanning';
import { LoginContainer } from '@/Screens/Login';

const Tab = createBottomTabNavigator();

// @refresh reset
export const LoginNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeContainer}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginContainer}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
            <Tab.Screen
                name="MealPlanning"
                component={MealPlanningContainer}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
        </Tab.Navigator>
    );
};
