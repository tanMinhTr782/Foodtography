import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export interface NutritionProps {}

export const Nutrition = (props: NutritionProps) => {
  return (
    <View style={styles.nutritionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nutrition per Servings</Text>
        <Text style={styles.viewAllText}>View all</Text>
      </View>
      <View style={styles.nutritions}>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionName}>Calories</Text>
          <Text style={styles.nutritionValue}>437</Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionName}>Fat</Text>
          <Text style={styles.nutritionValue}>11.7g</Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionName}>Protein</Text>
          <Text style={styles.nutritionValue}>23.3g</Text>
        </View>
        <View style={styles.nutritionItem}>
          <Text style={styles.nutritionName}>Crabs</Text>
          <Text style={styles.nutritionValue}>61.5g</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nutritionContainer: {
    marginTop: 33,
    paddingLeft: 18,
    paddingRight: 18,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3C7363",
  },
  viewAllText: {
    fontSize: 14,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  nutritions: {
    flexDirection: "row",
    marginTop: 24,
  },
  nutritionItem: {
    flex: 1,
    alignItems: "center",
  },
  nutritionName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3C7363",
    marginBottom: 23,
  },
  nutritionValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3C7363",
  },
});
