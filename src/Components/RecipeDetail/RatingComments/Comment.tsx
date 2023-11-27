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

export interface CommentProps {
  username: String;
  date: String;
  comment: String;
}

export const Comment = (props: CommentProps) => {
  const { username, date, comment } = props;
  return (
    <View style={styles.commentContainer}>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/R.2a7b587ab284e50f621e4a58986eec4b?rik=qDIOcdY9h2Bs%2fw&pid=ImgRaw&r=0&sres=1&sresct=1",
        }}
        style={styles.userAvatar}
      />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.dateComment}>{date}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    marginTop: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  dateComment: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#00000070",
    marginBottom: 14,
  },
  comment: {
    fontSize: 17,
    fontWeight: "300",
  },
});
