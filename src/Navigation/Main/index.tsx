import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { HomeContainer } from '@/Screens/Home';
import { MealPlanningContainer } from '@/Screens/MealPlanning';
import { SearchContainer } from '@/Screens/Search';

import {MaterialIcons} from '@expo/vector-icons'; 
import { OnboardingContainer } from "@/Screens/Onboarding/OnboardingContainer";

// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
const Tab = createBottomTabNavigator();



// @refresh reset


// export default PopupMenu; 

export const MainNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions = { ({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName; 

                if (route.name === 'Home') {
                  iconName = focused
                    ? "home-filled"
                    : "home-filled";
                } else if (route.name === "Meal Plan") {
                  iconName = focused ? "calendar-today": "calendar-today";
                }
                else if (route.name === 'Photo To Recipe') {
                  iconName = focused ? "image-search": "image-search";
                }
                else if (route.name === 'Search') {
                  iconName = focused ? "search" : "search";
                }
                
                else if (route.name === 'More') {
                  iconName = focused ? "more-horiz": "more-horiz";
                }
                
                // You can return any component that you like here!
                return <MaterialIcons name={iconName as any} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'white',
              tabBarStyle: { backgroundColor: '#3C7363'},
            
            })}
            >

            <Tab.Screen
                name="Home"
                component={HomeContainer}
                options={{
                    // tabBarIconStyle: { display: 'none' },
                    // tabBarLabelPosition: 'beside-icon',
                }}
            />
                <Tab.Screen
                name="Meal Plan"
                component={MealPlanningContainer}
                options={{
                    // tabBarIconStyle: { display: 'none' },
                    // tabBarLabelPosition: 'beside-icon',
                }}
            />
            <Tab.Screen
                name="Photo To Recipe"
                component={SearchContainer}
                options={{
                  // tabBarIconStyle: { display: "none" },
                  // tabBarLabelPosition: "beside-icon",
                }}
              />
            <Tab.Screen
                name="Search"
                component={SearchContainer}
                options={{
                    // tabBarIconStyle: { display: 'none' },
                    // tabBarLabelPosition: 'beside-icon',
                }}
            />
        </Tab.Navigator>

    );
};
