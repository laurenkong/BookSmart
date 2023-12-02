// TODO: implement "addItemToBookshelf" functionality; currently just navigates to Bookshelf screen
// TODO: implement pagination

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { BookInfo } from "../../data/BookInfo";

const ITEMS_PER_PAGE = 3; // Number of items to load per page

const Feed = ({ navigation }) => {
  const addItemToBookshelf = (bookData) => {
    // Placeholder function for adding a book to the bookshelf
    console.log("Added to bookshelf:", bookData.volumeInfo.title);
    // Implement the logic to add the book to the bookshelf here
  };

  const renderQuotes = (books) =>
    books.map((book, index) => (
      <View key={index} style={styles.quoteCard}>
        <Image source={book.bookCover} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.quoteContainer}>{book.content[0]}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate("BookProfileFeed", { bookData: book })
              }
            >
              <Text style={styles.linkText}>Go to Book</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Bookshelf")}>
              <Text style={styles.linkText}>Add to Bookshelf</Text>
            </Pressable>
          </View>
        </View>
      </View>
    ));

  return <ScrollView>{renderQuotes(BookInfo)}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5", // Light gray background
  },
  quoteCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  thumbnail: {
    width: 60,
    height: 90,
    borderRadius: 4,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 5,
    marginRight: 7,
  },
  quoteContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  linkText: {
    color: "#85C5A9",
    textDecorationLine: "underline",
    marginRight: 7,
  },
  quote: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Aligns buttons to the top
    marginTop: 10,
  },

  endText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default Feed;
