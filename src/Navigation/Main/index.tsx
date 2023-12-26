import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeContainer } from '@/Screens/Home';
import { MealPlanningContainer } from '@/Screens/MealPlanning';
import { SearchContainer } from '@/Screens/Search';

import { RecipeDetailContainer } from '@/Screens/RecipeDetail/RecipeDetailContainer';
import { CreateRecipeContainer } from '@/Screens/CreateRecipe/CreateRecipeContainer';

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
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
                name="MealPlanning"
                component={MealPlanningContainer}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchContainer}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
            <Tab.Screen
                name="CreateRecipe"
                component={CreateRecipeContainer}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
        </Tab.Navigator>
    );
};
