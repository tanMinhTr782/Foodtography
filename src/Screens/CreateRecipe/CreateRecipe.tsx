import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export interface CreateRecipeProps {}

export const CreateRecipe = (props: CreateRecipeProps) => {
  const [sharingOption, setSharingOption] = useState("Private");
  const [ingredients, setIngredients] = useState([
    {
      name: "Onion",
      count: "50",
    },
    {
      name: "Salt",
      count: "2",
    },
  ]);

  const removeIngredient = (name: String) => {
    setIngredients(ingredients.filter((item) => item.name !== name));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.createRecipeContainer}>
        <Text style={styles.title}>Create recipe</Text>
        <View>
          <Text style={styles.addRecipeTitle}>Recipe title</Text>
          <TextInput style={styles.input} placeholder="Add recipe title" />
        </View>

        <View>
          <Text style={{ marginBottom: 10 }}>
            <Text style={styles.addRecipeTitle}>Recipe image</Text>
            <Text style={styles.optionalText}> (Optional)</Text>
          </Text>

          <TextInput style={styles.input} placeholder="Add recipe title" />
        </View>

        <View>
          <Text style={styles.addRecipeTitle}>Ingredients</Text>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientContainer}>
              <Text style={{ flex: 1 }}>
                <Text style={styles.ingredientIndex}>{index + 1}. </Text>
                <Text style={styles.ingredientName}>{ingredient.name}</Text>
              </Text>
              <View style={styles.countTrashContainer}>
                <Text style={styles.ingredientCount}>{ingredient.count}</Text>
                <Pressable onPress={() => removeIngredient(ingredient.name)}>
                  <Ionicons name="trash-outline" size={24} />
                </Pressable>
              </View>
            </View>
          ))}
          <TouchableHighlight
            style={styles.ingredientContainer}
            underlayColor="#3C736310"
            onPress={() => {}}
          >
            <Text style={styles.addIngredientText}>+ Add more ingredients</Text>
          </TouchableHighlight>
        </View>

        <View>
          <Text style={styles.addRecipeTitle}>Cooking instructions</Text>
          <TextInput
            style={styles.cookingInstructionsInput}
            placeholder="Add cooking instructions"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <View>
          <Text style={styles.addRecipeTitle}>Author's notes</Text>
          <TextInput
            style={styles.authorNotesInput}
            placeholder="Add cooking instructions"
            multiline={true}
            numberOfLines={2}
          />
        </View>

        <View>
          <Text style={styles.sharingOptionsTitle}>Sharing options</Text>
          <Pressable
            style={styles.optionContainer}
            onPress={() => setSharingOption("Private")}
          >
            {sharingOption === "Private" ? (
              <View style={styles.checkmarkCover}>
                <Ionicons name="checkmark" color="white" size={20} />
              </View>
            ) : (
              <View style={styles.circle}></View>
            )}
            <Text style={styles.optionText}>Private</Text>
          </Pressable>

          <Pressable
            style={styles.optionContainer}
            onPress={() => setSharingOption("Public")}
          >
            {sharingOption === "Private" ? (
              <View style={styles.circle}></View>
            ) : (
              <View style={styles.checkmarkCover}>
                <Ionicons name="checkmark" color="white" size={20} />
              </View>
            )}
            <Text style={styles.optionText}>Public</Text>
          </Pressable>
        </View>

        <TouchableHighlight
          onPress={() => console.log("a")}
          style={styles.doneBtn}
          underlayColor="#3C7363AA"
        >
          <Text style={styles.doneText}>DONE</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  createRecipeContainer: {
    backgroundColor: "white",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 21,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
  },
  addRecipeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ingredientContainer: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    backgroundColor: "#3C736320",
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 18,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  addIngredientText: {
    color: "#707070",
    fontSize: 18,
    fontWeight: "bold",
  },
  countTrashContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ingredientIndex: {
    fontSize: 18,
    marginRight: 6,
  },
  ingredientName: {
    fontSize: 18,
  },
  ingredientCount: {
    fontSize: 18,
  },
  optionalText: {
    fontSize: 22,
    color: "#949494",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    backgroundColor: "#3C736320",
    paddingLeft: 12,
    fontSize: 18,
    marginBottom: 14,
  },
  cookingInstructionsInput: {
    width: "100%",
    height: 124,
    borderRadius: 10,
    backgroundColor: "#3C736320",
    paddingLeft: 12,
    paddingTop: 8,
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 14,
    textAlignVertical: "top",
  },
  authorNotesInput: {
    width: "100%",
    height: 70,
    borderRadius: 10,
    backgroundColor: "#3C736320",
    paddingLeft: 12,
    paddingTop: 8,
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 14,
    textAlignVertical: "top",
  },
  sharingOptionsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 4,
  },
  checkmarkCover: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 4,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    marginLeft: 8,
    marginBottom: 2,
  },
  doneBtn: {
    backgroundColor: "#3C7363",
    width: "100%",
    height: 47,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  doneText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});