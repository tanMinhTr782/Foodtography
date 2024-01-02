import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { IngredientItem } from "./IngredientItem";

import Ionicons from "@expo/vector-icons/Ionicons";

export const Ingredients = (props: any) => {
  return (
    <View style={styles.ingredientsContainer}>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.servesContainer}>
        <View style={styles.serves}>
          <Ionicons name="remove-circle-outline" size={24} />
               {
                   props.usedIngredientCount ? (<Text style={styles.servesCount}>Serves {props.usedIngredientCount}</Text>) : (
                       <Text style={styles.servesCount}>Serves {props.data.extendedIngredients.length}</Text>
                   )
               }
          <Ionicons name="add-circle-outline" size={24} />
        </View>
        <Text style={styles.USPerServing}>US/Serving</Text>
      </View>
      <View style={styles.ingredients}>
        {
            props.usedIngredients ? (
                      props.data.usedIngredients.map((item: any, id: number) => {
                          return (
                              <IngredientItem
                                  name={item.name}
                                  count={item.amount}
                                  image={item.image}
                                  unit={item.unit}
                                  key={"Ingredient-Item-To-Cooking-" + id}
                              />
                          )
                      })
            ) : (
                props.data.extendedIngredients.map((item: any, id: number) => {
                          return (
                              <IngredientItem
                                  name={item.name}
                                  count={item.amount}
                                  image={"https://png.pngtree.com/element_our/20200702/ourmid/pngtree-vector-illustration-knife-and-fork-western-food-plate-image_2283844.jpg"}
                                  unit={item.unit}
                                  key={"Ingredient-Item-To-Cooking-" + id}
                              />
                          )
                })
            )
        }
      </View>
      <TouchableHighlight
        onPress={() => console.log("a")}
        style={styles.addToCartBtn}
        underlayColor="#3C7363AA"
      >
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientsContainer: {
    marginTop: 14,
    paddingLeft: 18,
    paddingRight: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3C7363",
    marginBottom: 7,
  },
  servesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  serves: {
    flexDirection: "row",
    alignItems: "center",
  },
  servesCount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3C7363",
    marginLeft: 4,
    marginRight: 4,
  },
  USPerServing: {
    fontSize: 14,
    fontStyle: "italic",
  },
  ingredients: {
    gap: 6,
  },
  addToCartBtn: {
    backgroundColor: "#3C7363",
    width: "100%",
    height: 47,
    marginTop: 17,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
