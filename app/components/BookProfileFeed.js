// TODO: show comments and other things from BookInfo.js

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

const BookProfileFeed = ({ route, navigation }) => {
  const { bookData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={bookData.bookCover} style={styles.image} />
      <Text style={styles.title}>{bookData.title}</Text>
      <Text style={styles.author}>Author: {bookData.author}</Text>
      <View style={styles.contentContainer}>
        {/* Render the content array as separate paragraphs */}
        {bookData.content.map((paragraph, index) => (
          <Text key={index} style={styles.content}>
            {paragraph}
          </Text>
        ))}
      </View>
      {/* Additional book info like tags, username, etc., can be added here */}
      <Button
        title="Read Preview"
        onPress={() =>
          navigation.navigate("Gutenberg", {
            title: bookData.title, // Assuming you want to pass the title
          })
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  author: {
    fontSize: 18,
    marginTop: 5,
  },
  contentContainer: {
    marginTop: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 10,
  },
  // ... other styles
});

export default BookProfileFeed;
