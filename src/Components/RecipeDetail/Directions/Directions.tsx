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

export interface DirectionsProps {}

export const Directions = (props: DirectionsProps) => {
  return (
    <View style={styles.directionsContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Directions</Text>
        <Text style={styles.hideImagesText}>Hide Images</Text>
      </View>
      <TouchableHighlight
        onPress={() => console.log("a")}
        style={styles.stepByStepBtn}
        underlayColor="#3C7363AA"
      >
        <Text style={styles.stepByStepText}>STEP BY STEP MODE</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  directionsContainer: {
    marginTop: 24,
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
  hideImagesText: {
    fontSize: 14,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  stepByStepBtn: {
    backgroundColor: "#3C7363",
    width: "100%",
    height: 47,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  stepByStepText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
