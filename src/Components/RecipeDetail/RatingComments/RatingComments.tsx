import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from "react-native";

import { Comment } from "./Comment";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

export interface RatingCommentsProps {}

export const RatingComments = (props: RatingCommentsProps) => {
  return (
    <View style={styles.ratingCommentsContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ratings & Comments</Text>
        <Text style={styles.viewAllText}>View all</Text>
      </View>
      <View style={styles.commentsContainer}>
        <Comment
          username="Lê Văn Bằng"
          date="27-11-2023"
          comment="Easy and very good for health"
        />
        <Comment
          username="Trần Minh Tân"
          date="28-11-2023"
          comment="Easy and very good for health, too"
        />
        <Comment
          username="Lý Thanh Hùng"
          date="29-11-2023"
          comment="I love it so much"
        />
      </View>
      <View style={styles.rateContainer}>
        <Text style={styles.title}>Tap to rate</Text>
        <View style={styles.starsContainer}>
          <FontAwesome name="star-o" size={30} />
          <FontAwesome name="star-o" size={30} />
          <FontAwesome name="star-o" size={30} />
          <FontAwesome name="star-o" size={30} />
          <FontAwesome name="star-o" size={30} />
        </View>
      </View>
      <View style={styles.leaveCommentContainer}>
        <View style={styles.camera}>
          <FontAwesome name="camera" size={30} />
        </View>
        <TextInput style={styles.input} placeholder="Leave a comment" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingCommentsContainer: {
    marginTop: 33,
    paddingLeft: 18,
    paddingRight: 18,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
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
  commentsContainer: {
    gap: 30,
  },
  rateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  starsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  leaveCommentContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  camera: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 16,
  },
});
