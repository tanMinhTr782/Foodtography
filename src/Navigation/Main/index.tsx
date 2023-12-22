import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { RecipeDetailContainer } from "@/Screens/RecipeDetail/RecipeDetailContainer";
import { CreateRecipeContainer } from "@/Screens/CreateRecipe/CreateRecipeContainer";

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      /> */}
      {/* <Tab.Screen
        name="RecipeDetail"
        component={RecipeDetailContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      /> */}
      <Tab.Screen
        name="CreateRecipe"
        component={CreateRecipeContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
    </Tab.Navigator>
  );
};
