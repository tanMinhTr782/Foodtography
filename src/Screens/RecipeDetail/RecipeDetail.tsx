import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Ingredients } from "@/Components/RecipeDetail/Ingredients/Ingredients";
import { Nutrition } from "@/Components/RecipeDetail/Nutrition/Nutrition";
import { Directions } from "@/Components/RecipeDetail/Directions/Directions";
import { RatingComments } from "@/Components/RecipeDetail/RatingComments/RatingComments";

export interface RecipeDetailProps {}

export const RecipeDetail = (props: RecipeDetailProps) => {
  return (
    <ScrollView style={styles.recipeDetailContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/cc/61/5f/cc615f9cd92e13a89592475d5475df1a.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.recipeNameContainer}>
          <Text style={styles.recipeText}>RECIPE</Text>
          <Text style={styles.recipeName}>Vietnamese Crab Noodle Soup </Text>
          <Text style={styles.authorName}>
            <Text style={{ fontWeight: "bold" }}>by </Text>
            <Text style={{ fontStyle: "italic" }}>Tan Tran</Text>
          </Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingStars}>
          <Text style={styles.rating}>4.2</Text>
          <View style={styles.starsContainer}>
            <FontAwesome name="star" size={24} color="#E4D200" />
            <FontAwesome name="star" size={24} color="#E4D200" />
            <FontAwesome name="star" size={24} color="#E4D200" />
            <FontAwesome name="star" size={24} color="#E4D200" />
            <FontAwesome name="star-half-o" size={24} color="#E4D200" />
          </View>
        </View>
        <Text style={styles.ratingCount}>8 Ratings</Text>
      </View>
      <Text style={styles.description}>
        Many variations of bún riêu can be sampled all throughout Vietnam, but
        with a homemade verison, you can adjust the spices and seasonings to
        your liking. It usually features a tomato broth, noodles, and crab. This
        recipe is more of a weekend project that's perfect to take on during the
        cold winter months, and the combination of flavors is simply
        unforgettable
      </Text>
      <View style={styles.timeToCook}>
        <Text style={styles.time}>2 hours 30 mins</Text>
        <Text style={styles.totalTimeText}>Total time</Text>
      </View>

      <Ingredients />

      <Nutrition />

      <Directions />

      <RatingComments />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipeDetailContainer: {
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: 500,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  recipeNameContainer: {
    position: "absolute",
    width: "86%",
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    bottom: -15,
    left: "7%",
    borderWidth: 1,
    padding: 15,
  },
  recipeText: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 14,
    color: "#3C7363",
  },
  recipeName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#3C7363",
    marginTop: 7,
    marginBottom: 10,
  },
  authorName: {
    textAlign: "center",
    fontSize: 14,
  },
  ratingContainer: {
    marginTop: 39,
  },
  ratingStars: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 13,
  },
  starsContainer: {
    flexDirection: "row",
    gap: 3,
  },
  ratingCount: {
    fontSize: 14,
    marginTop: 18,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "300",
  },
  description: {
    fontSize: 14,
    paddingLeft: 18,
    paddingRight: 18,
    textAlign: "justify",
    marginTop: 26,
    marginBottom: 27,
  },
  timeToCook: {
    padding: 14,
    alignItems: "center",
    borderColor: "#00000020",
    borderWidth: 1,
    marginLeft: 18,
    marginRight: 18,
    borderRadius: 10,
  },
  time: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3C7363",
  },
  totalTimeText: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 19,
  },
});
