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

export interface IngredientItemProps {
  image: string;
  name: String;
  count: String;
}

export const IngredientItem = (props: IngredientItemProps) => {
  const { image, name, count } = props;
  return (
    <View style={styles.ingredientContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.ingredientImage}
      />
      <Text style={styles.count}>{count} grams</Text>
      <Text style={styles.ingredientName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientContainer: {
    width: "100%",
    height: 70,
    borderColor: "#00000020",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  ingredientImage: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    marginRight: 20,
  },
  count: {
    fontSize: 14,
    fontStyle: "italic",
    marginRight: 30,
  },
  ingredientName: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
