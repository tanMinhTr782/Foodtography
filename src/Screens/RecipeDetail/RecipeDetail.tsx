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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Ingredients } from "@/Components/RecipeDetail/Ingredients/Ingredients";
import { Nutrition } from "@/Components/RecipeDetail/Nutrition/Nutrition";
import { Directions } from "@/Components/RecipeDetail/Directions/Directions";
import { RatingComments } from "@/Components/RecipeDetail/RatingComments/RatingComments";


export const RecipeDetail = (props: {goBack: () => void, data: any}) => {
    const renderStarArray = Array.from({ length: (props.data.likes < 6 ? props.data.likes : 5) }, (_, index) => index);
    const renderUnStarArray = Array.from({ length: (5 - (props.data.likes < 6 ? props.data.likes : 5)) }, (_, index) => index);
    return (
    <ScrollView style={styles.recipeDetailContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: props.data.image,
          }}
          style={styles.image}
        />
        <MaterialIcons name="arrow-back-ios" size={32} onPress={() => props.goBack()} style={{ position: 'absolute', top: 60, left: 30, opacity: 0.7 }} color="red" />
        <View style={styles.recipeNameContainer}>
          <Text style={styles.recipeText}>RECIPE</Text>
          <Text style={styles.recipeName}>{props.data.title}</Text>
          <Text style={styles.authorName}>
            <Text style={{ fontWeight: "bold" }}>by </Text>
            <Text style={{ fontStyle: "italic" }}>Tan Tran</Text>
          </Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingStars}>
          <Text style={styles.rating}>{props.data.likes < 6 ? props.data.likes : 5}</Text>
          <View style={styles.starsContainer}>
                        {
                            renderStarArray.map((index) => (
                                <AntDesign name="star" size={24} color="#E4D200" />
                            ))
                        }
                        {
                            renderUnStarArray.map((index) => (
                                <AntDesign name="staro" size={24} />
                            ))
                        }
          </View>
        </View>
        <Text style={styles.ratingCount}>{props.data.likes} {props.data.likes === 1 ? "Rating" : "Ratings"}</Text>
      </View>
      <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus sagittis dictum.
                Sed in velit at mi lobortis fermentum accumsan et dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Curabitur laoreet condimentum sodales. Maecenas odio leo, faucibus eget nulla et, aliquet dictum felis.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque fermentum augue id nisl ornare,
                vel consectetur urna molestie. Praesent vehicula sit amet dui a pretium. Ut eu est non nibh lobortis efficitur.
                Nunc id magna sagittis, tincidunt odio sed, elementum ante. Vivamus bibendum sapien ac lorem tincidunt tempus.
                Suspendisse potenti. Suspendisse tincidunt, elit et tristique tempor, dolor augue tempus turpis, et facilisis mi nisi et ligula.
                Morbi sit amet mi blandit, viverra purus sit amet, tincidunt nunc.
      </Text>
      <View style={styles.timeToCook}>
        <Text style={styles.time}>1 hours 30 mins</Text>
        <Text style={styles.totalTimeText}>Total time</Text>
      </View>

      <Ingredients data={props.data}/>

      <Nutrition />

      <Directions />

      <RatingComments />
      <View style={{marginTop: 50}}></View>
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
