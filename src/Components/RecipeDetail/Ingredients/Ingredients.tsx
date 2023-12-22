import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { IngredientItem } from "./IngredientItem";

import Ionicons from "@expo/vector-icons/Ionicons";

export interface IngredientsProps {}

export const Ingredients = (props: IngredientsProps) => {
  return (
    <View style={styles.ingredientsContainer}>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.servesContainer}>
        <View style={styles.serves}>
          <Ionicons name="remove-circle-outline" size={24} />
          <Text style={styles.servesCount}>Serves 4</Text>
          <Ionicons name="add-circle-outline" size={24} />
        </View>
        <Text style={styles.USPerServing}>US/Serving</Text>
      </View>
      <View style={styles.ingredients}>
        <IngredientItem
          name="Salt"
          count="20"
          image="https://th.bing.com/th/id/R.e55bdaa86eea8a83d725cfe0d02a80f9?rik=TT6LcOoxbyv3IA&riu=http%3a%2f%2fwww.mastersinhealthcare.com%2fwp-content%2fuploads%2fsalt.jpg&ehk=u4UXsYS7BJZHei5Gb86djUCFlZ7xoUVyz43j%2frAITgs%3d&risl=&pid=ImgRaw&r=0"
        />
        <IngredientItem
          name="Sugar"
          count="40"
          image="https://th.bing.com/th/id/OIP.6YI_7Zq0Psa2XsMTdSuLHAHaE7?rs=1&pid=ImgDetMain"
        />
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
