import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FriendComment = ({
  name,
  bookTitle,
  pageNumber,
  comment,
  profilePic,
  bookCover,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profilePic} style={styles.profilePic} />
        <Text style={styles.name}>{name}</Text>
        <Image source={bookCover} style={styles.bookCover} />
      </View>
      <Text style={styles.bookTitle}>
        {bookTitle}, {pageNumber}
      </Text>

      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginVertical: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3, // for Android
    shadowOffset: { width: 1, height: 1 }, // for iOS
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  bookTitle: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  name: {
    fontWeight: "bold",
    flex: 1,
  },
  bookCover: {
    width: 40,
    height: 60,
    borderRadius: 5,
  },
  comment: {
    marginTop: 5,
    opacity: 0.6,
  },
});

export default FriendComment;
